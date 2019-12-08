//test3
const CITY_SPEED_LIMIT = 50;
const TWO_LANE_EXPRESSWAY_SPEED_LIMIT = 120;
const HIGHWAY_SPEED_LIMIT = 140;

let speed = 49;

let typeOfRoad ='city';


console.log('instrukcja if');
console.log('');

if (typeOfRoad == 'city')
    {
        if (speed < CITY_SPEED_LIMIT)
        {
            console.log('Miasto: jedziesz prawidlowo')
        }
        else
        {
            console.log('Miasto: przekroczyles predkosc')
        }
    }

    if (typeOfRoad == 'expressway')
    {
        if (speed < TWO_LANE_EXPRESSWAY_SPEED_LIMIT)
        {
            console.log('Eska: jedziesz prawidlowo')
        }
        else
        {
            console.log('Eska: przekroczyles predkosc')
        }
    }
    

    if (typeOfRoad == 'highway')
    {
        if (speed < HIGHWAY_SPEED_LIMIT)
        {
            console.log('Autostrada: jedziesz prawidlowo')
        }
        else
        {
            console.log('Autostrada: przekroczyles predkosc')
        }
    }

console.log('');
console.log('instrukcja switch'); 
console.log('');

switch (true)

{
    case (typeOfRoad == 'city'):
        {
            switch (true)
            {
            case (speed<=CITY_SPEED_LIMIT):
            console.log('Miasto: jedziesz prawidlowo');
            break;
            case (speed>=CITY_SPEED_LIMIT):
            console.log('Miasto: przekroczyles predkosc');
            break;
            }
            break;
        }

    case (typeOfRoad == 'expressway'):
        {
            switch (true)
           {
            case (speed<=TWO_LANE_EXPRESSWAY_SPEED_LIMIT):
            console.log('Eska: jedziesz prawidlowo');
            break;
            case (speed>=TWO_LANE_EXPRESSWAY_SPEED_LIMIT):
            console.log('Eska: przekroczyles predkosc');
            break;
            }
            break;
        }

    case (typeOfRoad == 'highway'):
        {
            switch (true)
            {
            case (speed<=HIGHWAY_SPEED_LIMIT):
            console.log('Autostrada: jedziesz prawidlowo');
            break;
            case (speed>=HIGHWAY_SPEED_LIMIT):
            console.log('Autostrada: przekroczyles predkosc');
            break;
            }
            break;
        }
}