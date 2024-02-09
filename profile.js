let favColor = document.querySelector(`#color`)
let favPlace = document.querySelector(`#place`)
let favGame = document.querySelector(`#game`)
let buttonColor = document.querySelector(`.favButton`)

const favColorAlert = evt => alert(`My favorite color is purple!`)
const favPlaceAlert = evt => alert(`My favorite place is the house I grew up in!`)
const favGameAlert = evt => alert(`My favorite game is Europa Universalis 4!`)

const changeBtn = () => {
    buttonColor.style.backgroundColor = "black";
    buttonColor.style.color = "yellow";
}

const changeBtnBack = () => {
    buttonColor.style.backgroundColor = "yellow";
    buttonColor.style.color = "black";
}

buttonColor.addEventListener(`mouseover`, changeBtn)
buttonColor.addEventListener(`mouseout`, changeBtnBack)
favColor.addEventListener(`click`, favColorAlert)
favPlace.addEventListener(`click`, favPlaceAlert)
favGame.addEventListener(`click`, favGameAlert)

let profilePic = document.getElementById(`profilePic`)
let dynamite = document.getElementById(`napoleon`)
let hoiIV = document.getElementById(`hoiIV`)
let hoiText = document.getElementById(`textHoi`)
let mySkills = document.getElementById(`mySkills`)
let disPic = document.getElementsByClassName(`disapearingPic`)
let goals = document.getElementById(`careerGoals`)
let nice = document.getElementById(`nice`)

hoiText.onmouseout = () => hoiIV.style.display = "none";

hoiText.onmouseover = () => hoiIV.style.display = "block";

mySkills.onmouseover = () => dynamite.style.display = "block";

mySkills.onmouseout = () => dynamite.style.display = "none";

goals.onmouseover = () => nice.style.display = "block";

goals.onmouseout = () => nice.style.display = "none";

