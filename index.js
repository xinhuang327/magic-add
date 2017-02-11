"use strict";
/**
 * Perform a magical add operation
 * @param {number} numberA
 * @param {number} numberB
 * @return {number}
 */
function magicAdd(numberA, numberB) {
    return numberA + numberB;
}
exports.magicAdd = magicAdd;
function magicAddPeople(a, b) {
    return {
        name: a.name,
        age: a.age + b.age
    };
}
exports.magicAddPeople = magicAddPeople;
