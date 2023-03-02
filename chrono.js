let M = 0
let S = 0
let MS = 0
let intervalMinute
let intervalSeconde
let intervalMiliseconde


function setmiliseconde(){
    if (MS == 999){
        MS = 0
    }
    MS += 1
document.getElementById('MS').innerHTML = MS + ' ms'    
}