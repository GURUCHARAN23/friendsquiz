var readlineSync = require("readline-sync");

var score=0;

var userName = readlineSync.question("welcome Buddy, May I know your name ?");

console.log("Hi " + userName + "   this is a short quiz about how well do you know me");

function play(question, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer===answer){
    console.log("right!");
    score=score+1;
  }else{
    console.log("wrong");
  }
  console.log("current score", score);
  console.log("------------------");
}
var questions =[ {
  question: "where do guru live  ? ",
  answer:"bhadrachalam"
},{
  question:"who is guru's child hood friend  ?",
  answer:"akhil"
},{
  question: "which sport do i play the most  ? ",
  answer:"cricket"
},{
  question: "what is Guru's nickname  ? ",
  answer:"cherry"
},{
  question: "what is his favourite color ? ",
  answer:"red"
}];

for (var x=0;x<questions.length;x++){
  var cQ=questions[x];
  play(cQ.question,cQ.answer);
}

console.log("YOUR score is ", score );