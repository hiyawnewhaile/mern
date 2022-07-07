// Arrow functions

function sayHello(name){
    console.log("Hello" + name);
};

sayHello(" Nichole ");

var sayHello2 = function(name, name2){
    console.log("hello again" + name + name2);
}

sayHello2(" Nichole ", " Mendy ");

const greet = (name) => {
    console.log("Hello "+name+" from greet!");
};

greet("Hiyaw");

const greet2 = (name) => console.log("Hello "+name+" from greet 2!");

greet2("Hiyaw");

