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
  }
};
