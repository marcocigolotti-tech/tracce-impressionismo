const SPREADSHEET_NAME = 'Tracce di Impressionismo – Risposte gruppi';
const SHEET_NAME = 'Risposte';
const HEADERS = ['ID invio','Data e ora','Gruppo','Autore','Opera','Data opera','Osservazione libera del gruppo','Indizi individuati','Indizio scelto','Prova visiva','Accordo iniziale','Idee diverse','Decisione – osservazione','Decisione – ingrandimento','Decisione – confronto','Decisione – prova visiva','Decisione – altro','Conclusione'];

// Inserisci qui l'ID dello spreadsheet creato dal docente (tra /d/ e /edit nell'URL).
const SPREADSHEET_ID = 'INCOLLA_QUI_ID_SPREADSHEET';

const CASES = {
  'Gruppo 1': { artist:'Claude Monet', artwork:'Campo di papaveri ad Argenteuil', year:'1873' },
  'Gruppo 2': { artist:'Pierre-Auguste Renoir', artwork:'Bal du moulin de la Galette', year:'1876' },
  'Gruppo 3': { artist:'Edgar Degas', artwork:'La classe di danza', year:'1873–1876' },
  'Gruppo 4': { artist:'Berthe Morisot', artwork:'La culla', year:'1872' },
  'Gruppo 5': { artist:'Edgar Degas', artwork:'In un caffè (L’Assenzio)', year:'1875–1876' },
  'Gruppo 6': { artist:'Édouard Manet', artwork:'Il bar delle Folies-Bergère', year:'1882' }
};
const ALLOWED_CLUES = ['MOMENTO','LUCE E COLORE','PENNELLATA','REALTÀ OSSERVATA'];

function doPost(e) {
  try {
    const data = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    const clean = validatePayload_(data);
    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      const sheet = getSheet_();
      const existing = findSubmissionRow_(sheet, clean.submissionId);
      if (!existing) {
        sheet.appendRow([
          safeCell_(clean.submissionId), new Date(), safeCell_(clean.group), safeCell_(clean.artist), safeCell_(clean.artwork), safeCell_(clean.artworkYear),
          safeCell_(clean.freeObservation), safeCell_(clean.selectedClues), safeCell_(clean.chosenClue), safeCell_(clean.visualEvidence), safeCell_(clean.initialAgreement), safeCell_(clean.differentIdeas),
          safeCell_(clean.decisionObservation), safeCell_(clean.decisionZoom), safeCell_(clean.decisionDiscussion), safeCell_(clean.decisionVisualEvidence), safeCell_(clean.decisionOther), safeCell_(clean.conclusion)
        ]);
        SpreadsheetApp.flush();
      }
    } finally { lock.releaseLock(); }
    return ContentService.createTextOutput(JSON.stringify({ok:true})).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ok:false,error:String(err.message||err)})).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  const p=(e&&e.parameter)||{};
  if (p.action !== 'verify') return jsonp_(p.callback,{registered:false,error:'Azione non valida'});
  const id=String(p.submissionId||'');
  if (!validUuid_(id)) return jsonp_(p.callback,{registered:false,submissionId:id});
  const registered=Boolean(findSubmissionRow_(getSheet_(),id));
  return jsonp_(p.callback,{registered:registered,submissionId:id});
}

function setupSheet() {
  const sheet=getSheet_();
  sheet.setFrozenRows(1);
  sheet.getRange(1,1,1,HEADERS.length).setFontWeight('bold').setWrap(true);
  sheet.autoResizeColumns(1,HEADERS.length);
  return 'Foglio pronto: '+SPREADSHEET_NAME+' / '+SHEET_NAME;
}

function getSheet_(){
  if (!SPREADSHEET_ID || SPREADSHEET_ID.indexOf('INCOLLA_')===0) throw new Error('Configura SPREADSHEET_ID in Code.gs');
  const ss=SpreadsheetApp.openById(SPREADSHEET_ID);
  let sh=ss.getSheetByName(SHEET_NAME);
  if(!sh) sh=ss.insertSheet(SHEET_NAME);
  const current=sh.getRange(1,1,1,HEADERS.length).getValues()[0];
  if(current.every(v=>v==='')) sh.getRange(1,1,1,HEADERS.length).setValues([HEADERS]);
  else if(current.join('\u241F')!==HEADERS.join('\u241F')) throw new Error('Le intestazioni del foglio Risposte non corrispondono alla struttura prevista.');
  return sh;
}

function findSubmissionRow_(sheet,id){
  if(sheet.getLastRow()<2) return 0;
  const finder=sheet.getRange(2,1,sheet.getLastRow()-1,1).createTextFinder(id).matchEntireCell(true).findNext();
  return finder?finder.getRow():0;
}

function validatePayload_(d){
  const text=(v,max,required=false)=>{v=String(v??'').trim();if(required&&!v)throw new Error('Campo obbligatorio mancante');if(v.length>max)throw new Error('Campo troppo lungo');return v};
  const submissionId=text(d.submissionId,80,true); if(!validUuid_(submissionId))throw new Error('submissionId non valido');
  const group=text(d.group,40,true), c=CASES[group]; if(!c)throw new Error('Gruppo non ammesso');
  const artist=text(d.artist,100,true), artwork=text(d.artwork,160,true), artworkYear=text(d.artworkYear,30,true);
  if(artist!==c.artist||artwork!==c.artwork||artworkYear!==c.year)throw new Error('Dati opera non coerenti');
  const selectedClues=text(d.selectedClues,250,true), chosenClue=text(d.chosenClue,60,true);
  const selected=selectedClues.split('|').map(x=>x.trim()).filter(Boolean);
  if(!selected.length||selected.some(x=>!ALLOWED_CLUES.includes(x)))throw new Error('Indizi non validi');
  if(!ALLOWED_CLUES.includes(chosenClue)||!selected.includes(chosenClue))throw new Error('Indizio scelto non valido');
  const yn=v=>{v=text(v,3,true);if(!['Sì','No'].includes(v))throw new Error('Valore Sì/No non valido');return v};
  const initialAgreement=yn(d.initialAgreement);
  const differentIdeas=text(d.differentIdeas,500,initialAgreement==='No');
  return {submissionId,group,artist,artwork,artworkYear,freeObservation:text(d.freeObservation,500),selectedClues,chosenClue,visualEvidence:text(d.visualEvidence,700,true),initialAgreement,differentIdeas:initialAgreement==='Sì'?'Non applicabile':differentIdeas,decisionObservation:yn(d.decisionObservation),decisionZoom:yn(d.decisionZoom),decisionDiscussion:yn(d.decisionDiscussion),decisionVisualEvidence:yn(d.decisionVisualEvidence),decisionOther:text(d.decisionOther,300),conclusion:text(d.conclusion,300,true)};
}

function validUuid_(s){return /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(s)}
function safeCell_(v){v=String(v??'');return /^[=+\-@]/.test(v)?"'"+v:v}
function jsonp_(callback,obj){
  const cb=String(callback||'').trim();
  if(!/^[A-Za-z_$][0-9A-Za-z_$]*$/.test(cb)) return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
  return ContentService.createTextOutput(cb+'('+JSON.stringify(obj)+');').setMimeType(ContentService.MimeType.JAVASCRIPT);
}
