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

console.log(buildTriangle(15));