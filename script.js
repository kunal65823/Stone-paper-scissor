let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");


const showWinner = (userWin, userChoice,compChoice) => {
    if(userWin){
        userscore++;
        userscorePara.innerText = userscore;
         msg.innerText = `You Win . Your ${userChoice} beats ${compChoice}`;
         msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compscorePara.innerText = compscore;
        msg.innerText = `You lose. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const drawGame = () => {
     msg.innerText = "Game is draw, Play again";
     msg.style.backgroundColor = "#081b31"
}
const genComputerChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
};

const playGame = (userChoice) => {
    console.log("userchoice is = ", userChoice);
    const compChoice = genComputerChoice();
    console.log("userchoice is = ", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    })
})