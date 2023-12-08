function leapYear(year) {
    // let year = prompt('Input Year');
    if (year%4 ===0 && year % 100 ===0){
            return 'Hi!!! ' +year+' is a leap year';
    }
    else{
        return 'Hi! ' +year+' is not a leap year';
    }
};
console.log(leapYear(2000));