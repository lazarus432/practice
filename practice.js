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

// Convert each even number to the string "even" and convert each odd number to the string "odd"

var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

for(row=0; row < numbers.length; row++){
    for(col=0; col < numbers[row].length; col++){
        var even = numbers[row][col];
        if(even % 2 === 0){
            console.log('even');
        }else{
            console.log('odd');
        }
    }
}
