let startGameDiv = document.getElementById('start-game-div')
let startGameBtn = document.getElementById("start-game-btn")
let title = document.getElementById("title")
let body = document.querySelector('body')
let scoreDiv = document.getElementById('score-div')
let restartGameDiv = document.getElementById('restart-game')
let timeStarted;
let restartGameBtn = startGameBtn;
let newStartGameBtn;

startGameBtn.addEventListener('click', afterStartGame)

function afterStartGame(){
    body.style.backgroundColor = 'rgb(224, 62, 62)'
    startGameBtn.remove()
    randomNumber = Math.floor(Math.random() * (5000 - 1000 + 1) + 1000);
    timeOut = setTimeout(afterRandomTime, randomNumber);
}

function afterRandomTime(){
    body.style.backgroundColor = 'rgb(27, 207, 27)'
    let startTime = Date.now()
    timeStarted = startTime
    console.log('start Time: ' + startTime)

    if (body.style.backgroundColor == 'rgb(27, 207, 27)'){
        document.addEventListener('click', afterClick)
    }
}

function afterClick(){
    let endTime = Date.now()
    console.log("  end time: " + endTime)
    let duration = (endTime - timeStarted) / 1000

    let SCORE = document.createElement('h4');
    SCORE.id = "score"
    SCORE.style.fontSize = '35px';
    SCORE.style.display = 'flex';
    SCORE.style.justifyContent = 'center';
    SCORE.style.alignItems = 'center';
    SCORE.style.color = '#fff';
    SCORE.style.width = '500px';
    SCORE.style.height = '20px';
    SCORE.style.padding = '20px';
    SCORE.style.position = 'absolute';
    SCORE.style.left = '32%';
    SCORE.style.top = '38%';
    SCORE.style.marginBottom = '20px';
    SCORE.innerText = 'REACTION TIME: ' + duration + " s";

    scoreDiv.appendChild(SCORE)
    console.log(scoreDiv)
    restartGameBtn.style.top = '50%';
    restartGameBtn.innerText = "RESTART"
    restartGameBtn.onclick = reStartGame
    restartGameDiv.appendChild(restartGameBtn)
    if (restartGameDiv.contains(restartGameBtn)){
        document.removeEventListener('click', afterClick)
    }
}

function reStartGame(){
    beforeStartGame()
}

function beforeStartGame(){
    let toBeRemoved = document.getElementById('score')
    if (toBeRemoved == null){
}
    else {
        toBeRemoved.remove()
    }
    restartGameBtn.remove()
    body.style.backgroundColor = '#000'
    clearTimeout(timeOut)
    startGameBtn = addNewStartGameBtn()
    startGameDiv.append(startGameBtn)
}

function addNewStartGameBtn(){
    newStartGameBtn = document.createElement('h4')
    newStartGameBtn.innerText = 'START GAME'
    newStartGameBtn.classList.add('start-game')
    newStartGameBtn.addEventListener('click', afterStartGame)
    return newStartGameBtn
}



// rgb(27, 207, 27) green
// rgb(224, 62, 62) red