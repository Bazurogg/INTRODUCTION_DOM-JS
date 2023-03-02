let M = 0
let S = 0
let MS = 0
let intervalMinute
let intervalSeconde
let intervalMiliseconde


function setMiliseconde(){
    if (MS == 999){
        MS = 0
    }
    MS += 1
document.getElementById('MS').innerHTML = MS + ' ms'    
}

function setSeconde(){
    if (S == 59){
        S = 0
        
    }
    S += 1
document.getElementById('S').innerHTML = S +' s'    
}

function setMinute(){
    if (M == 59){
        M = 0
    }
    M += 1
document.getElementById('M').innerHTML = M +' min' 
}


function start (){
    intervalMinute = setInterval (setMinute, 60000)
    intervalSeconde = setInterval (setSeconde, 1000)
    intervalMiliseconde = setInterval (setMiliseconde, 1)
}

function stop (){
    clearInterval (intervalMinute)
    clearInterval (intervalSeconde)
    clearInterval (intervalMiliseconde)   
}


function reset (){
    stop()
    M = 0
    S = 0
    MS = 0
    document.getElementById('M').innerHTML = M+' 0 min'
    document.getElementById('S').innerHTML = S+' 0 s'
    document.getElementById('MS').innerHTML = MS + ' 0 ms'
}