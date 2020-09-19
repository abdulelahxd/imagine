var d = new Date();
var date = d.getDate();
var year = d.getFullYear();
var month = d.getMonth();
var monthArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
month = monthArr[month];

for(let i=0; i< 40; i++){
    let dateToday = document.getElementsByClassName('date')[i]
    dateToday.innerHTML = date + " " + month + ", " + year;
}