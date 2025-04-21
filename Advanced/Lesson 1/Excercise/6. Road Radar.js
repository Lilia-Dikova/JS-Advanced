function solve (currentSpeed, area) {
    currentSpeed = Number (currentSpeed);
    let speedLimit = 0;
    let overSpeed = 0;
    let status = "";

    switch (area) {
        case "motorway" : 
        speedLimit = 130;
        break;
        case "interstate" : 
        speedLimit = 90;  
        break;
        case "city" : 
        speedLimit = 50;
        break;
        case "residential" : 
        speedLimit = 20;
        break;
    }
    overSpeed = currentSpeed - speedLimit;

    if (overSpeed > 0 && overSpeed <= 20) {
        status = "speeding";
    } else if (overSpeed > 20 && overSpeed <= 40) {
        status = "excessive speeding";
    } else if ( overSpeed > 40 ) {
        status = "reckless driving";
    }

    if (!status)  {
        console.log(`Driving ${currentSpeed} km/h in a ${speedLimit} zone`)
    } else {
        console.log (`The speed is ${overSpeed} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
    }
}

solve (70, 'city')