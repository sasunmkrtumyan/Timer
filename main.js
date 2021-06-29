const hour = document.querySelector(".hour")
const minute = document.querySelector(".minute")
const second = document.querySelector(".second")
// let secondValue;
// second.addEventListener("input", (e) => {
//     secondValue = e.target.value;
//     console.log(secondValue);
// });
let intervalId;
const start = document.querySelector(".start")
start.addEventListener("click", (e)=>{
    start.disabled = true
    intervalId = setInterval((e)=>{
    console.log(second.value, minute.value, hour.value);

        if(second.value === "0" && minute.value === "0" && hour.value === "0"){
            clearInterval(intervalId)
        }

        if(second.value === '') {
            second.value = '60';
            minute.value--;
        }

        second.value--; 
        
        if(second.value - 1 < 0 ){
            second.value = "";
            if(second.value === "" && minute.value === ""){
                hour.value--
                minute.value = 59
                second.value = 59
            }
            if(second.value === "" && minute.value > ""){
                minute.value --
                second.value = 59
            }
            
        } 
}, 1000);
})

const stop = document.querySelector(".stop")
stop.addEventListener("click", (e)=>{
    clearInterval(intervalId)
    start.disabled = false

    })

const reset = document.querySelector(".reset")
reset.addEventListener("click", (e)=>{
    clearInterval(intervalId)
    second.value = "";
    minute.value = "";
    hour.value = "";
    start.disabled = false
})

second.addEventListener('focusout', () => {
    if(second.value > 59){
        minute.value = Math.floor(second.value/60)
        second.value = second.value % 60
    }
});
// --------------- second end-----------------------

// --------------- minute start-----------------------

minute.addEventListener('focusout', () => {
    if(minute.value > 59){
        hour.value = Math.floor(minute.value/60)
        minute.value = minute.value % 60
    }
});


// --------------- minute end-----------------------

