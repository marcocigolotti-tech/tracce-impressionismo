window.TracceAPI = (() => {
  // INCOLLA QUI L'URL /exec DELLA WEB APP APPS SCRIPT DOPO IL DEPLOYMENT.
  const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbxsXZ0MuWPoNkIFgcC5lkGraVMALRL3qDdVhBSOw3BLTmd4Tp8wxHWB63RKpczcj380/exec';
  const configured=()=>/^https:\/\/script\.google\.com\/macros\/s\/.+\/exec$/.test(WEB_APP_URL);
  const sleep=ms=>new Promise(r=>setTimeout(r,ms));

  async function post(payload){
    if(!configured()) throw new Error('WEB_APP_URL non configurato');
    // no-cors è deliberato: il POST trasporta soltanto i dati. NON conferma il salvataggio.
    await fetch(WEB_APP_URL,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(payload)});
  }

  function verifyOnce(submissionId, timeout=7000){
    return new Promise((resolve,reject)=>{
      if(!configured()) return reject(new Error('WEB_APP_URL non configurato'));
      const cb='tracceVerify_'+Date.now()+'_'+Math.random().toString(36).slice(2);
      const script=document.createElement('script'); let finished=false;
      const clean=()=>{if(finished)return;finished=true;delete window[cb];script.remove();clearTimeout(timer)};
      window[cb]=(data)=>{clean(); if(data && data.submissionId===submissionId) resolve(Boolean(data.registered)); else reject(new Error('Risposta di verifica non valida'));};
      script.onerror=()=>{clean();reject(new Error('Verifica non raggiungibile'))};
      const timer=setTimeout(()=>{clean();reject(new Error('Timeout verifica'))},timeout);
      script.src=WEB_APP_URL+'?action=verify&submissionId='+encodeURIComponent(submissionId)+'&callback='+encodeURIComponent(cb)+'&_='+Date.now();
      document.head.appendChild(script);
    });
  }

  async function submitAndVerify(payload,onStatus=()=>{}){
    onStatus('Invio del lavoro…');
    try{await post(payload)}catch(e){onStatus('Il tentativo di invio non è partito.');throw e}
    const waits=[700,1500,2500];
    for(let i=0;i<waits.length;i++){
      onStatus('Stiamo verificando che il lavoro sia stato registrato…');
      await sleep(waits[i]);
      try{if(await verifyOnce(payload.submissionId)) return true}catch(e){}
    }
    return false;
  }
  return {configured,submitAndVerify,verifyOnce};
})();
