window.TRACCE_CASES = {
  monet1: {
    id: 'monet1', group: 'Gruppo 1', artist: 'Claude Monet',
    artwork: 'Campo di papaveri ad Argenteuil', year: '1873', museum: "Musée d'Orsay, Parigi",
    // Copia locale byte-per-byte della riproduzione Wikimedia Commons / Google Art Project, Public Domain Mark.
    image: 'images/monet-papaveri.jpg',
    imageAlt: 'Claude Monet, Campo di papaveri ad Argenteuil, 1873',
    commonsPage: 'https://commons.wikimedia.org/wiki/File:Claude_Monet_-_Poppy_Field_-_Google_Art_Project.jpg',
    museumPage: 'https://www.musee-orsay.fr/it/opere/coquelicots-1010',
    clues: {
      moment: { label:'⏱ MOMENTO', question:'La scena sembra cogliere un momento che potrebbe cambiare?', help:'Che cosa potrebbe cambiare se le persone continuassero a camminare?' },
      lightColor: { label:'☀️ LUCE E COLORE', question:'Che cosa fanno la luce e i colori nella scena?', help:'Dove si ripete maggiormente il rosso? Che effetto produce?' },
      brushwork: { label:'🖌️ PENNELLATA', question:'Riesci a vedere tocchi o segni del pennello?', help:'Ingrandisci l’opera e osserva soprattutto il prato e i papaveri.' },
      reality: { label:'👁 REALTÀ OSSERVATA', question:'Quale situazione della realtà sembra interessare al pittore?', help:'Che tipo di momento della vita quotidiana sembra rappresentato?' }
    }
  },
  renoir2: {
    id:'renoir2', group:'Gruppo 2', artist:'Pierre-Auguste Renoir', artwork:'Bal du moulin de la Galette', year:'1876', museum:"Musée d'Orsay, Parigi",
    image:'images/Ball_at_the_Moulin_de_la_Galette_Renoir_1876.jpg', imageAlt:'Pierre-Auguste Renoir, Bal du moulin de la Galette, 1876',
    commonsPage:'https://commons.wikimedia.org/wiki/File:Auguste_Renoir_-_Dance_at_Le_Moulin_de_la_Galette_-_Mus%C3%A9e_d%27Orsay_RF_2739.jpg', museumPage:'https://www.musee-orsay.fr/fr/oeuvres/bal-du-moulin-de-la-galette-497',
    lookHelp:'Guardate le persone. Sembrano ferme in posa oppure immerse in ciò che stanno facendo?',
    clues:{
      moment:{label:'⏱ MOMENTO',question:'La scena sembra cogliere un momento che potrebbe cambiare?',help:'Che cosa potrebbe essere diverso pochi secondi dopo?'},
      lightColor:{label:'☀️ LUCE E COLORE',question:'Che cosa fanno la luce e i colori nella scena?',help:'Guardate gli abiti, i volti e il terreno. Dove vedete zone di luce e di ombra?'},
      brushwork:{label:'🖌️ PENNELLATA',question:'Riesci a vedere tocchi o segni del pennello?',help:'Ingrandite una zona della folla. Le forme sono definite nello stesso modo in ogni punto?'},
      reality:{label:'👁 REALTÀ OSSERVATA',question:'Quale situazione della realtà sembra interessare al pittore?',help:'Quale momento della vita parigina sta rappresentando Renoir?'}
    }
  },
  degas3: {
    id:'degas3', group:'Gruppo 3', artist:'Edgar Degas', artwork:'La classe di danza', year:'1873–1876', museum:"Musée d'Orsay, Parigi",
    image:'images/Edgar_Degas_-_The_Ballet_Class_-_Google_Art_Project.jpg', imageAlt:'Edgar Degas, La classe di danza, 1873–1876',
    commonsPage:'https://commons.wikimedia.org/wiki/File:Edgar_Degas_-_The_Ballet_Class_-_Google_Art_Project.jpg', museumPage:'https://www.musee-orsay.fr/fr/oeuvres/la-classe-de-danse-1151?no_cache=1',
    lookHelp:'Osservate le ballerine una alla volta. Stanno facendo tutte la stessa cosa?',
    clues:{
      moment:{label:'⏱ MOMENTO',question:'La scena sembra cogliere un momento che potrebbe cambiare?',help:'Osservate gesti e posizioni. Che cosa sembra stare accadendo durante la lezione?'},
      lightColor:{label:'☀️ LUCE E COLORE',question:'Che cosa fanno la luce e i colori nella scena?',help:'Quali parti della stanza e delle figure appaiono più illuminate?'},
      brushwork:{label:'🖌️ PENNELLATA',question:'Riesci a vedere tocchi o segni del pennello?',help:'Ingrandite gli abiti, il pavimento e lo sfondo. Che cosa notate nel modo in cui sono dipinti?'},
      reality:{label:'👁 REALTÀ OSSERVATA',question:'Quale situazione della realtà sembra interessare al pittore?',help:'Degas ci mostra lo spettacolo oppure un momento di lavoro e preparazione?'}
    }
  },
  morisot4: {
    id:'morisot4', group:'Gruppo 4', artist:'Berthe Morisot', artwork:'La culla', year:'1872', museum:"Musée d'Orsay, Parigi",
    image:'images/Berthe_Morisot_-_The_Cradle_-_Google_Art_Project.jpg', imageAlt:'Berthe Morisot, La culla, 1872',
    commonsPage:'https://commons.wikimedia.org/wiki/File:Berthe_Morisot_-_The_Cradle_-_Google_Art_Project.jpg', museumPage:'https://www.musee-orsay.fr/fr/oeuvres/le-berceau-1132',
    lookHelp:'Guardate la donna, il bambino e il velo della culla. Dove va per primo il vostro sguardo?',
    clues:{
      moment:{label:'⏱ MOMENTO',question:'La scena sembra cogliere un momento che potrebbe cambiare?',help:'Che cosa sembra stare accadendo proprio in questo momento?'},
      lightColor:{label:'☀️ LUCE E COLORE',question:'Che cosa fanno la luce e i colori nella scena?',help:'Quali zone sono più chiare? Che effetto produce il velo davanti alla culla?'},
      brushwork:{label:'🖌️ PENNELLATA',question:'Riesci a vedere tocchi o segni del pennello?',help:'Ingrandite il velo, l’abito e lo sfondo. Che cosa notate?'},
      reality:{label:'👁 REALTÀ OSSERVATA',question:'Quale situazione della realtà sembra interessare al pittore?',help:'È una scena eccezionale oppure un momento della vita quotidiana?'}
    }
  },
  degas5: {
    id:'degas5', group:'Gruppo 5', artist:'Edgar Degas', artwork:'In un caffè (L’Assenzio)', year:'1875–1876', museum:"Musée d'Orsay, Parigi",
    image:'images/degas-assenzio.jpg', imageAlt:'Edgar Degas, In un caffè (L’Assenzio), 1875–1876',
    commonsPage:'https://commons.wikimedia.org/wiki/File:Edgar_Degas_-_In_a_Caf%C3%A9_-_Google_Art_Project_2.jpg', museumPage:'https://www.musee-orsay.fr/fr/oeuvres/dans-un-cafe-1147',
    lookHelp:'Osservate le due persone e lo spazio intorno a loro. Che cosa vi fa capire in quale tipo di luogo si trovano?',
    clues:{
      moment:{label:'⏱ MOMENTO',question:'La scena sembra cogliere un momento che potrebbe cambiare?',help:'Che cosa nelle posture e nei gesti fa pensare a un momento della loro permanenza nel locale?'},
      lightColor:{label:'☀️ LUCE E COLORE',question:'Che cosa fanno la luce e i colori nella scena?',help:'Quali colori dominano? Che effetto producono nell’insieme della scena?'},
      brushwork:{label:'🖌️ PENNELLATA',question:'Riesci a vedere tocchi o segni del pennello?',help:'Ingrandite i tavoli, gli abiti e lo sfondo. Che cosa notate?'},
      reality:{label:'👁 REALTÀ OSSERVATA',question:'Quale situazione della realtà sembra interessare al pittore?',help:'Quale ambiente della vita urbana viene rappresentato?'}
    }
  },
  manet6: {
    id:'manet6', group:'Gruppo 6', artist:'Édouard Manet', artwork:'Il bar delle Folies-Bergère', year:'1882', museum:'The Courtauld, Londra',
    image:'images/manet-folies-bergere.jpg', imageAlt:'Édouard Manet, Il bar delle Folies-Bergère, 1882',
    commonsPage:'https://commons.wikimedia.org/wiki/File:Edouard_Manet,_A_Bar_at_the_Folies-Berg%C3%A8re.jpg', museumPage:'https://courtauld.ac.uk/highlights/a-bar-at-the-folies-bergere/',
    clueIntro:'Quali elementi dell’opera possono essere messi in relazione con le ricerche dell’Impressionismo che abbiamo scoperto?',
    lookHelp:'Guardate la donna, gli oggetti sul bancone e ciò che appare dietro di lei. Che cosa sta succedendo nello spazio?',
    proofLead:'Quale elemento permette meglio di mettere quest’opera in relazione con le ricerche dell’Impressionismo?',
    proofQuestion:'Dove lo vedete nell’opera?',
    conclusionHelp:'In quest’opera abbiamo individuato __________, che possiamo mettere in relazione con le ricerche dell’Impressionismo perché __________.',
    clues:{
      moment:{label:'⏱ MOMENTO',question:'La scena sembra cogliere un momento che potrebbe cambiare?',help:'Che cosa fa pensare che intorno alla donna ci sia una situazione animata e in movimento?'},
      lightColor:{label:'☀️ LUCE E COLORE',question:'Che cosa fanno la luce e i colori nella scena?',help:'Dove notate maggiormente luci, riflessi e colori?'},
      brushwork:{label:'🖌️ PENNELLATA',question:'Riesci a vedere tocchi o segni del pennello?',help:'Ingrandite soprattutto la folla e lo sfondo. Che cosa notate nel modo in cui sono dipinti?'},
      reality:{label:'👁 REALTÀ OSSERVATA',question:'Quale situazione della realtà sembra interessare al pittore?',help:'Quale aspetto della vita moderna parigina viene rappresentato?'}
    }
  }
};
