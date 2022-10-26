let currentDate = new Date();
const months = ["January", "February", "March", "April",
    "May", "June", "July", "August", "September",
    "October", "November", "December"];
let monthName = months[currentDate.getMonth()];

const week = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
let weekName = week[currentDate.getDay()];

console.log(
    currentDate.getDate() + "-" + monthName + "-" + currentDate.getFullYear() + "(" + weekName + ")"
);