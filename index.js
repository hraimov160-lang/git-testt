function updateTime(){
    let now = new Date();

    let day= now.getDate()
    let hour=now.getHours()
    let minuts=now.getMinutes()
    let second=now.getSeconds()

    if(day<10) day = '0'+day 
    if(hour<10) hour = '0'+hour
    if(minuts<10) minuts = '0'+minuts 
    if(second<10) second = '0'+second

    document.querySelector('.h13').textContent=`${day}:${hour}:${minuts}:${second}`

}
let kmk = 0
updateTime()

setInterval(updateTime,1000)

const numberel = document.getElementById('number0');
let count = Number(numberel.textContent);
if (count === 0) {
    numberel.textContent = '0';
}
function plas() {   
    count += 1; 
    if (count < 10) {
        numberel.textContent = '0' + count;
    } else {
        numberel.textContent = count;
    }
    console.log(numberel.textContent);
}
