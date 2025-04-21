function solve (steps, meters, speed) {
    let distancePassed = steps * meters / 1000;
    let minutesBreak = Math.floor(distancePassed / 0.5);

    let total = (distancePassed / speed );
    total += minutesBreak / 60
    let hours = parseInt(total % 60);
    total %= 1;
    let minutes = parseInt(total * 60);
    total = (total * 60) - minutes ;
    let seconds = Math.ceil (total * 60); 

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}

    console.log(hours+':'+minutes+':'+seconds)
}

solve(4000,0.6,5)