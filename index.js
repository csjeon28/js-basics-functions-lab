const hqStreet = 42;

function distanceFromHqInBlocks(streetNumber){
    let distanceInBlocks;
    distanceInBlocks = streetNumber - hqStreet;
    if (distanceInBlocks <0) {
        distanceInBlocks = distanceInBlocks * -1;
    }
    return distanceInBlocks;
}

function distanceFromHqInFeet(streetNumber){
    let distanceInFeet;
    distanceInFeet = (streetNumber - hqStreet) * 264;
    if (distanceInFeet <0) {
        distanceInFeet = distanceInFeet * -1;
    }
    return distanceInFeet;
}

function distanceTravelledInFeet(streetNumber, endStreet){
    let distanceTravelled;
    distanceTravelled = (endStreet - streetNumber) * 264;
    if (distanceTravelled <0) {
        distanceTravelled = distanceTravelled * -1;
    }
    return distanceTravelled;
}

function calculatesFarePrice(streetStart, streetDestination){
    let distanceTravelledInFeet;
    distanceTravelledInFeet = (streetDestination - streetStart) * 264;
    if (distanceTravelledInFeet <0) {
        distanceTravelledInFeet = distanceTravelledInFeet * -1; 
    }
    let calculatesFarePrice;
    calculatesFarePrice = ((distanceTravelledInFeet - 400) * .02);
    if (distanceTravelledInFeet <=400 ) {
        return (0);
      } else if (distanceTravelledInFeet > 400 && distanceTravelledInFeet < 2000) {
        return (calculatesFarePrice); 
      } else if (distanceTravelledInFeet > 2000 && distanceTravelledInFeet < 2500) {
        return (25); 
      } else if (distanceTravelledInFeet > 2500) {
        return ("cannot travel that far");
      }
    return distanceTravelledInFeet;
}