'use strict';

const costs = [200, 550, 4000, 23, 58, 5000, 485, 711];

const getBonus = (arr) => {
    let bonus = 0;
    let sum = 0;
    for (let value of arr) {
        sum += value;
    };
    if (sum > 10000) {
        bonus = 0.05*sum;
    } 
    return parseInt(bonus);
};

console.log(getBonus(costs));

