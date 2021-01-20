

playerCount = 0;
let playerLifeTotals = [];
let borderColor = ["#ffffff50", "#00FFE650", "#FDFF0050", "#FF008650"];

function newPlayer() {

    playerCount += 1;
    let activePlayer = playerCount - 1
    let newPlayerDiv = document.createElement('div');
    newPlayerDiv.setAttribute("id", "player" + playerCount + "Display");
    newPlayerDiv.setAttribute("class", "playerDisplay");
    newPlayerDiv.setAttribute("style", "border: 3px solid " + borderColor[activePlayer] + ";")
    newPlayerDiv.innerHTML = "<a class=\"playerName\">Player " + playerCount + "</a><button id=\"player" + playerCount + "LifeDownButton\" class=\"lifeDownButton\">-1</button><a id=\"player" + playerCount + "LifeTotalDisplay\" class=\"lifeTotalDisplay\"></a><button id=\"player" + playerCount + "LifeUpButton\" class=\"lifeUpButton\">+1</button>";
    document.getElementById('playersZone').appendChild(newPlayerDiv);
    const playerLifeTotalDisplay = document.querySelector("#player" + playerCount + "LifeTotalDisplay");
    playerLifeTotals.push(20);
    playerLifeTotalDisplay.innerText = playerLifeTotals[activePlayer];

    const playerLifeUpButton = document.querySelector("#player" + playerCount + "LifeUpButton");
    playerLifeUpButton.addEventListener('click', () => {
        playerLifeTotals[activePlayer] += 1;
        playerLifeTotalDisplay.innerText = playerLifeTotals[activePlayer];
    });

    const playerLifeDownButton = document.querySelector("#player" + playerCount + "LifeDownButton");
    playerLifeDownButton.addEventListener('click', () => {
        playerLifeTotals[activePlayer] -= 1;
        playerLifeTotalDisplay.innerText = playerLifeTotals[activePlayer];
    });
}

let newPlayerButton = document.getElementById('newPlayerButton');

newPlayerButton.addEventListener('click', () => {
    newPlayer();
});

newPlayer();



