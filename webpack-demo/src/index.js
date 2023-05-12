
import moment from 'moment';

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log('hello stranger');
console.log('Welcome to my first Website ;)');

const deathStar= {
    diameter:  120000,
    fire: (target) =>{
        console.log(`${target} destroyed`)
    },
    isOperating: true,
    levels: 357,
    name: 'Deadth Star',
    population: 10000,
    commander:{
        name: 'Darth Vader',
        age: 40,
        
    }
}
console.log(deathStar);