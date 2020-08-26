// This is a generator for an upcoming 5k race

let raceNumber = Math.floor(Math.random() * 1000);
let early = true;

let age = 18;

if(early && age > 18) {
  raceNumber += 1000;
}

if(early && age > 18){
  console.log(`Your race will begin at 9:30am. Your race number is: ${raceNumber}.`);

}else if(age > 18){
  console.log(`Your race will begin at 11am. Your race number is: ${raceNumber}`);
}else if(age < 18){
  console.log(`Youth registrants run at 12:30pm regardless of registration. Your race number is: ${raceNumber}`);
}
else {
  console.log(`Please see the registration desk for assistance.`);
}
