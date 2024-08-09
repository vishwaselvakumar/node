const fs = require("fs")
fs.writeFileSync("name.txt" , "vwodfnwdjkncsdkjncdcndjcnwdjcnjdwc")
var name = "vishwa ";
console.log(name);

var age = 24;
var hasHobby = true;

function displayUser(userName , userAge , userHasHobby) {
    return "uSer name " + userName +'\n'+
    "age " + userAge + "\n" +
    "use" + userHasHobby;
}
console.log(displayUser(name, age,hasHobby))