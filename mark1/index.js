var chalk = require("chalk")
var readlineSync =  require('readline-sync');

highscores = [
  {
    name : "Prakalp",
    score : "3",
  },
  {
    name : "Ramesh",
    score : "2"
  }
]

console.log("Enter your name: ")
  var name = readlineSync.question()
console.log(chalk.blue("Hello "+ name +", Welcome to HOW WELL DO YOU KNOW PRAKALP "))

score=0;

function play(question, realAnswer){
    console.log(question);
    var userAnswer = readlineSync.question()
    // console.log("\n");
    if(userAnswer.toUpperCase() === realAnswer.toUpperCase()){
        console.log(chalk.green("CORRECT ANSWER! "))
        score++;
    }
    else
        console.log(chalk.red("WRONG ANSWER! "))
}


questionBank= [
  {
    question :  `Where does Prakalp live? `,
    answer : "Chhindwara"
  },
  {
    question :  `How old is Prakalp? `,
    answer : "23" 
  },
  {
    question :  `what is Prakalp's hobby? `,
    answer : "Photography"
  }
  
]

for(var i =0;i<questionBank.length;i++){
    play(questionBank[i].question, questionBank[i].answer)
    console.log("Current Score : "+score)
    console.log("------------------------------------")
}


console.log(chalk.red(`Your Score is ` +score))
console.log("\n");
console.log("Current high scores : ")
for(var i = 0; i<highscores.length;i++){
  console.log(highscores[i].name + " " + highscores[i].score);
}