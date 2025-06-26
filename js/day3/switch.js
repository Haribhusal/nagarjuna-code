let date = new Date();
let day = date.getDay();

switch (day) {
    case 0:
        console.log("Sun")
        break;
    case 1:
        console.log("Mon")
        break;
    case 2:
        console.log("Tue")
        break;
    case 3:
        console.log("Wed")
        break;
    case 4:
        console.log("Thu")
        break;
    case 5:
        console.log("Fri")
        break;
    default:
        console.log("Sat")
}