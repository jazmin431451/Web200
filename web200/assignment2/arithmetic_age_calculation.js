'use strict';

const ageInYears = parseInt(prompt('Enter your age in years:'));

const ageInMonths = ageInYears * 12;
const ageInDays = ageInYears * 365;
const ageInHours = ageInDays * 24;
const ageInSeconds = ageInHours * 3600;

console.log(`Age in Months: ${ageInMonths}`);
console.log(`Age in Days: ${ageInDays}`);
console.log(`Age in Hours: ${ageInHours}`);
console.log(`Age in Seconds: ${ageInSeconds}`);
