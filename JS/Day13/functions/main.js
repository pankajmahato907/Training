//.......................function....................
function add(a,b){
    return a + b ;
}
const results= add(5,3);
console.log(results)

//next example
function checkAge(age){
    if (age >= 18){
        return "You can vote";
    }else{
        return "You cannot vote"
    }
}
const result = checkAge(20);
console.log(result)


//.......................switch-case........................
let day =4;
switch (day){
    case 1:
    console.log("Sunday")
    break;

    case 2:
    console.log("MOnday")
    break;

    case 3:
    console.log("Tueday")
    break;

    case 4:
    console.log("Wedday")
    break;

    case 5:
    console.log("Thursday")
    break;

    case 6:
    console.log("friday")
    break;

    case 7:
    console.log("Saturday")
    break;

    default :
    console.log("otherday")

}




