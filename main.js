const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
let intervalId;
const start = document.querySelector(".start");
start.addEventListener("click", (e) => {
  let hourValue = +hour.value;
  let minuteValue = +minute.value;
  let secondValue = +second.value;

  start.disabled = true;
  intervalId = setInterval((e) => {
    if (!secondValue && !minuteValue && !hourValue) {
      clearInterval(intervalId);
    } else {
      if (secondValue) {
        secondValue--;
      }
      if (!secondValue && (minuteValue || hourValue)) {
        secondValue = 59;
        if (minuteValue) {
          minuteValue--;
        }
        if (!minuteValue && hourValue) {
          hourValue--;
          minuteValue = 59;
        }
      }
    }
    second.value = secondValue || "00";
    minute.value = minuteValue || "00";
    hour.value = hourValue || "00";
  }, 1000);
});

const stop = document.querySelector(".stop");
stop.addEventListener("click", (e) => {
  clearInterval(intervalId);
  start.disabled = false;
});

const reset = document.querySelector(".reset");
reset.addEventListener("click", (e) => {
  clearInterval(intervalId);
  second.value = "";
  minute.value = "";
  hour.value = "";
  start.disabled = false;
});

second.addEventListener("focusout", () => {
  if (second.value > 59) {
    minute.value = Math.floor(second.value / 60);
    second.value = second.value % 60;
  }
});
// --------------- second end-----------------------

// --------------- minute start-----------------------

minute.addEventListener("focusout", () => {
  if (minute.value > 59) {
    hour.value = Math.floor(minute.value / 60);
    minute.value = minute.value % 60;
  }
});

// --------------- minute end-----------------------
