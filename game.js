var num=prompt("enter your name")
console.log("num")
var play=document.getElementById("play")
function ComputerChoice() {
  var Choice = ["rock", "paper", "scissor"]
  var rand = Math.round(Math.random() * 2)
  //   console.log(rand)
  return Choice[rand]
}
function UserChoice(k) {
  var comp = ComputerChoice()
  console.log(comp)
  if (k === "rock") {
    if (comp === "scissor") {
       play.innerHTML=(num+" won the game")
    } else {
      comp === k?play.innerHTML="draw the game":play.innerHTML=(num+" lose the game")
    }
  }
  else if (k === "paper") {
    if (comp === "rock") {
      play.innerHTML=(num+" won the game")           
    } else {
      comp === k?play.innerHTML="draw the game":play.innerHTML=(num+" lose the game")
    }
  }
  else if (k === "scissor") {
    if (comp === "paper") {
     play.innerHTML=(num+" won the game")
    } else {
      comp === k?play.innerHTML="draw the game":play.innerHTML=(num+" lose the game")
    }
  }
}
