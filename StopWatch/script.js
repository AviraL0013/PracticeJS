const playbutton = document.getElementsByClassName("play")[0];
const lapbutton = document.getElementsByClassName("lap")[0];
const resetbutton = document.getElementsByClassName("reset")[0];
const second = document.getElementsByClassName("sec")[0];
const msecond = document.getElementsByClassName("msec")[0];
const minute = document.getElementsByClassName("minute")[0];
const laps = document.getElementsByClassName("laps")[0]
const clearbutton=document.getElementsByClassName("clear")[0]
let isplay = false;
let secondCounter = 0;
let msecondcounter = 0;
let minutecounter = 0;
let min, sec, msec;
let numbercount=0;
function togglebutton() {
    lapbutton.classList.remove("hidden");
    resetbutton.classList.remove("hidden");
}

function play() {
    if (!isplay) {
        playbutton.innerHTML = "pause";
        min = playminute();
        sec = playsec();
        msec = playmsecond();
        isplay = true;
    } else {
        playbutton.innerHTML = "play";
        clearInterval(min);
        clearInterval(sec);
        clearInterval(msec);
        isplay = false;
    }
    togglebutton();
}

function reset() {
    if (isplay) {
        play();
    }
    lapbutton.classList.add("hidden");
    resetbutton.classList.add("hidden");
    second.innerHTML = "0 :";
    msecond.innerHTML = "&nbsp; 0";
    minute.innerHTML = "&nbsp; 0 :";
    secondCounter = 0;
    msecondcounter = 0;
    minutecounter = 0;
}

function playsec() {
    return setInterval(() => {
        if (secondCounter === 60) {
            secondCounter = 0;
        }
        second.innerHTML = `${++secondCounter} : `;
    }, 1000);
}

function playmsecond() {
    return setInterval(() => {
        if (msecondcounter === 100) {
            msecondcounter = 0;
        }
        msecond.innerHTML = `${++msecondcounter}`;
    }, 10);
}

function playminute() {
    return setInterval(() => {
        minute.innerHTML = `${++minutecounter} :`;
    }, 60 * 1000);
}
function lap(){
    const li = document.createElement("li")
    const number = document.createElement("span")
    const timestamp = document.createElement("span")

    li.classList.add("lapsitem")
    number.classList.add("number")
    timestamp.classList.add("timestamp")
number.innerText=`#${++numbercount}`
    timestamp.innerHTML=`${minutecounter} : ${secondCounter} : ${msecondcounter}`

    li.append(number, timestamp)
    laps.append(li)
    clearbutton.classList.remove("hidden")
}
function clearall(){
    laps.innerHTML=""
    laps.append(clearbutton)
    clearbutton.classList.add("hidden")
}
resetbutton.addEventListener("click", reset);
playbutton.addEventListener("click", play);
lapbutton.addEventListener("click",lap)
clearbutton.addEventListener("click",clearall)