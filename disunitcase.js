// Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...

let number = 10;

switch(number) {
    case 1:
        console.log(number + `'"Units"'`);
        break;
    case 10:
        console.log("Tens");
        break;
    case 100:
        console.log("Hundreds");
        break;
    case 1000:
        console.log("Thousands");
        break;
    case 10000:
        console.log("Ten thousands");
        break;
    case 100000:
        console.log("Lakh");
        break;
    case 1000000:
        console.log("Ten Lakh");
        break;
    default:
        console.log("Wrong input!");
        break;
}