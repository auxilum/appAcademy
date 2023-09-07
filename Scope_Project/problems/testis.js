let newSmoothie = (...newIngr) => {
  let sentence = "blals blasld lsadasd ";
  for (let i = 0; i < newIngr.length; i++) {
    sentence += ` ${newIngr[i]}`;
  }
  console.log(sentence);
};

console.log(newSmoothie("brina", "dina", "basda"));
