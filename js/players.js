var p1Nick = null;
var p2Nick = null;
var startBtn = null;
var playerNames = [];

var validateInput = function () {
    var isValid = true;
    if (p1Nick.value.length < 4) {
        p1Nick.value = '';
        p1Nick.placeholder = 'Nombre demasiado corto.';
        isValid = false;
    }
    if (p2Nick.value.length < 4) {
        p2Nick.value = '';
        p2Nick.placeholder = 'Nombre demasiado corto.';
        isValid = false;
    }
    return isValid;
}

var savePlayerNames = function () {
    playerNames.push({ namep1: p1Nick.value, namep2: p2Nick.value });
    localStorage['playersNames'] = JSON.stringify(playerNames);
}

var nextPage = function () {
    savePlayerNames();
    var newGame = true;
    localStorage['newGame'] = JSON.stringify(newGame);
    location.href = 'game.html';
}

window.onload = function () {
    p1Nick = document.getElementById('p1Nick');
    p2Nick = document.getElementById('p2Nick');
    btnStart = document.getElementById('startBtn');
    btnStart.addEventListener('click', function () {
        (validateInput()) ? nextPage() : console.log('Debe completar los inputs de la forma requerida');
    });
}