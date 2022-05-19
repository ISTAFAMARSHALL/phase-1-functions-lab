// Code your solution in this file!
let hq = 42
let distance, feet, distanceInFeet, price

function distanceFromHqInBlocks(startingBlock) {
    if (startingBlock < hq) {
        return distance = -(startingBlock - hq);
    } else
        return distance = startingBlock - hq;
}

function distanceFromHqInFeet(startingBlock) {
    return feet = distanceFromHqInBlocks(startingBlock) * 264;
}

function distanceTravelledInFeet(start, stop) {
    if (start > stop) {
        return distanceInFeet = (start - stop) * 264;
    }
    return distanceInFeet = (stop - start) * 264;
}

function calculatesFarePrice(start, stop) {
    if (distanceTravelledInFeet(start, stop) > 2500) {
        return price = "cannot travel that far";
    } else if (distanceTravelledInFeet(start, stop) > 2000) {
        return price = 25;
    } else if ((distanceTravelledInFeet(start, stop) <= 2000) && (distanceTravelledInFeet(start, stop) > 400)) {
        return price = (((start-stop)*264)-400)*.02;
    } else if (distanceTravelledInFeet(start, stop) > 399) {
    } return price = 0;
}