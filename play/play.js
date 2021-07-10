// const str = "12:00:00AM";

// convertTime(str);

// function convertTime(time) {
//   if (time.includes("PM")) {
//     let tw = time.slice(0, 2);

//     if(tw== '12'){
//       console.log(time.replace(tw,'00').replace("PM",""));
//   }

//     let NTW = Number(tw)+12;
//     console.log(time.replace(tw,NTW).replace("PM",""));
//   }
// }
// // console.log(Number(str.slice(0,2))+12);

class Player{
  constructor(name,type){
    this.name = name;
    this.type = type;
  }

  greetings(){
    console.log(`Hi I'm ${this.name} and I'm ${this.type}`)
  }
}

class Wizard extends Player{
  constructor(name,type){
    super(name,type);
  }

  play(){
    console.log(`Weee I'm ${this.type}`)
  }
}

const player1 = new Player('Maged','magic');
player1.greetings();

const player2 = new Wizard('Maged','magic');
player2.play();