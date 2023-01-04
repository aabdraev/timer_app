var timerNode = document.querySelector (".timer_seconds_value");
var timerStartButton = document.querySelector ("#timer_start");
var timerResetButton = document.querySelector ("#timer_reset");
timerStartButton.addEventListener("click", StartTimer);
timerResetButton.addEventListener("click", ResetTimer);
var timerValue = 60;
var interval

function CountDown () {
    if (timerValue > 0) {
        timerNode.innerText = timerValue;
    }
    if (timerValue <= 0) {
        timerNode.innerText = 0;
        clearInterval(interval)   
    }
    timerValue--    
}

function ResetTimer () {
    if (interval > 0) {
        clearInterval(interval)
    }
    timerValue = 60;
    timerNode.textContent = timerValue;
    ResetButtonAcitve();
}

function StartTimer () {
    interval = setInterval(CountDown, 1000);
    StartButtonActive();
}

function StartButtonActive() {
    timerStartButton.disabled = true;
    timerStartButton.style.cursor = "default";
}

function ResetButtonAcitve() {
    timerStartButton.disabled = false;
    timerStartButton.style.cursor = "pointer";
}