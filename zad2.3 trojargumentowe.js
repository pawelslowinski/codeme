const CITY_SPEED_LIMIT = 50;
const TWO_LANE_EXPRESSWAY_SPEED_LIMIT = 120;
const HIGHWAY_SPEED_LIMIT = 140;
let ok = 'jedziesz prawidlowo';
let wrong = 'przekroczyles predkosc';

function myFunction(speed, typeOfRoad = 'city') {
    if (typeOfRoad == 'city') {
        return 'Miasto: ' + (speed <= CITY_SPEED_LIMIT ? ok : wrong)
    }
    if (typeOfRoad == 'expressway') {
        return 'Eska: ' + (speed <= TWO_LANE_EXPRESSWAY_SPEED_LIMIT ? ok : wrong)
    }
    if (typeOfRoad == 'highway') {
        return 'Autostrada: ' + (speed <= HIGHWAY_SPEED_LIMIT ? ok : wrong)
    }
}