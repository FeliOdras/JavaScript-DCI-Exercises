//this fuction returns the first day of a year (arg)
function isFirst(year) {

    const date = new Date(year, 0, 1);

    // Return a number of day
    let whatDay = date.getDay();


    let theDay;

    switch (whatDay) {
        case 0:
            theDay = "Sunday";
            break;
        case 1:
            theDay = "Monday";
            break;
        case 2:
            theDay = "Tuesday";
            break;
        case 3:
            theDay = "Wednesday";
            break;
        case 4:
            theDay = "Thursday";
            break;
        case 5:
            theDay = "Friday";
            break;
        case 6:
            theDay = "Saturday";
    }

    return theDay;
}

//Year function loops over 50 years from start - default is 2018
function years(start = 2018) {

    for (let year = start; year <= start + 50; year++) {
        // Year - Starting day (es: 2019 Wednesday)
        console.log(year, isFirst(year));
        // Leap or not
        console.log((isLeap(year) ? 'Yes is leap' : 'Not a leap'))
    }
}

//Leap year
function isLeap(year) {
    return new Date(year, 1, 29).getDate() === 29;
}


//Running the year() function
years(2019);