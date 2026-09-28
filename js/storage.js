window.TracceStorage = (() => {
  const KEY='tracceImpressionismo_work_v1';
  const fresh=(c)=>({version:1,caseId:c.id,submissionId:crypto.randomUUID(),currentStep:'home',startedAtLocal:new Date().toISOString(),group:c.group,artist:c.artist,artwork:c.artwork,artworkYear:c.year,freeObservation:'',selectedClues:[],chosenClue:'',visualEvidence:'',initialAgreement:'',differentIdeas:'',decisionFactors:[],decisionOther:'',conclusion:'',status:'in_progress'});
  const load=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'null')}catch{return null}};
  const save=(state)=>localStorage.setItem(KEY,JSON.stringify(state));
  const clear=()=>localStorage.removeItem(KEY);
  return {KEY,fresh,load,save,clear};
})();
