const timeEl = document.querySelector(".time")
const startBtn = document.querySelector(".start")
const pauseBtn = document.querySelector(".pause")
const resetBtn = document.querySelector(".reset")

let[hours,minutes,seconds,milliseconds] = [0,0,0,0] //ตั้งค่าเริ่มต้นตัวจับเวลา
let timer = null

startBtn.addEventListener("click",startTimer) //ถ้าใส่วงเล็บ startTimer() ฟังก์ชันจะถูกเรียกทันทีตอนโหลดโค้ด แทนที่จะรอจนผู้ใช้คลิก
pauseBtn.addEventListener("click",pauseTimer)
resetBtn.addEventListener("click",resetTimer)

function pauseTimer(){
    clearInterval(timer)
}
function resetTimer(){
    clearInterval(timer)
    //Reset ค่าเวลาทุกหน่วยเป็น 0 เพื่อไม่ให้เก็บค่าเดิมเวลาจับเวลาใหม่
    hours = 0
    minutes = 0
    seconds = 0
    minutes = 0
    timeEl.innerHTML = "00:00:00:000"
}
function startTimer(){
    if(timer!=null){ //เวลากด start จะเช็คว่า Timer ทำงานอยู่หรือไม่ถ้าใช่ก็จะหยุดการทำงาน timer ตัวเก่าก่อน
        clearInterval(timer)
    }
    timer = setInterval(displayTime,10) //เริ่มตัวจับเวลาใหม่ โดยเรียกฟังก์ชัน displayTime ทุก ๆ 10 มิลลิวินาที
}
function displayTime(){
    milliseconds+=10 //10 มิลลิวินาที เหมือน setInterval(displayTime,10) ดังนั้นทุก 10 มิลลิวินาที จะเพิ่มค่าทีละ 10 ตามเวลาจริง
    if(milliseconds === 1000){
        milliseconds = 0
        seconds++
        if(seconds === 60){
            seconds = 0
            minutes++
            if(minutes === 60){
                minutes = 0
                hours++
            }
        }
    }
    let h = hours<10 ? "0"+hours : hours
    let m = minutes<10 ? "0"+minutes : minutes
    let s = seconds<10 ? "0"+seconds : seconds
    let ms = milliseconds<10 ? "0"+milliseconds : milliseconds
    timeEl.innerHTML=`${h}:${m}:${s}:${ms}` //อัปเดตการแสดงผลเวลา
}

