//loops sample

var users = [
    {email: "kenny.doe@mail.de",password: "54321"},
    {email: "jen.doe@mail.de",password: "9876"}
];


var tweets = [{
        email: "kenny.doe@mail.de",
        msg: "just imagine that Let's go to Party!:)"
    },
    {
        email: "jen.doe@mail.de",
        msg: "or chillin on the couch?"
    },
    {
        email: "kenny.doe@mail.de",
        msg: "in which place would you like to go, then?"
    },
    {
        email: "jen.doe@mail.de",
        msg: "better sit and watch day better,.,. a bit lazy days :D"
    }
];

var email = prompt("email?");
var password = prompt("password?");

function userControl(email,password) {
    for(i=0; i < users.length; i++){
        if(users[i].email == email && users[i].password == password) {
            return true;
        }
    }
    return false;
}
function start() {
    if (userControl("email", "password")) {
        console.log("tweets");
    }else {
        console.log("username or password is wrong!");
    }
}
start("email", "password");