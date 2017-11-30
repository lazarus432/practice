// takes a length as input and outputs a line of *
function makeLine(length) {
    var line="";
    for (var j=1; j<=length; j++) {
        line+="*";
    }
    return line + "\n";
}

// takes a number as input and outputs a triangle
function buildTriangle(num) {
    var triangle = "";
    for (var x=1; x<=num; x++) {
        triangle+= makeLine(x);
    }
    return triangle;
}

// anonymous function that takes a number as input and outputs the number of ha's
var laugh = function(num){
    lau = "";
    for(var x=0; x<num; x++){
        lau +="ha";
    }
    return lau + '!';
}

console.log(laugh(10));

// use splice to remove blackberry and add yellow, green, and purple
var rainbow = ["Red", "Orange", "Blackberry", "Blue"];

rainbow.splice(2,1, "Yellow", "Green");
rainbow.splice(5,1, "Purple");

console.log(rainbow);

// write forEach loop that adds 100 to each number divisible by 3
var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];

test.forEach(function(element,index){
    if(element % 3 === 0){
        element += 100;
        test.splice(index, 1, element);
    }
})
console.log(test);
