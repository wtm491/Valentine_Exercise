let Rudy = {
  name: "Rudy",
  id: "valentine-1",
  message: "It'd be rude not to say happy Valentine's day!"
};

let Pomengranate = {
  name: "Pomengranate",
  id: "valentine-2",
  message: "You da POM! Happy Valentine's Day!"
};

let Schmitty = {
  name: "Schmitty",
  id: "valentine-3",
  message: "We're schmitten with you, Happy Valentine's day!"

};

let arrayNames = [Rudy,Pomengranate,Schmitty]


function setHTMLValentinesName(valentine) {
  let valentinehtmlname = document.getElementById(`${valentine.id}--name`);
  valentinehtmlname.innerHTML =  valentine.name;

}


function setHTMLValentinesMessage(valentine) {
  let valentinehtmlMessage = document.getElementById(`${valentine.id}--message`);
  valentinehtmlMessage.innerHTML = valentine.message;

}


function processValentines() {
  for(let i = 0; arrayNames.length; i++){
    console.log(arrayNames[i])
  }

}


setHTMLValentinesName(Rudy);
setHTMLValentinesMessage(Rudy);

setHTMLValentinesName(Pomengranate);
setHTMLValentinesMessage(Pomengranate);

setHTMLValentinesName(Schmitty);
setHTMLValentinesMessage(Schmitty);
