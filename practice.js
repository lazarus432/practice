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
        numbers[row][col] = numbers[row][col] % 2 === 0 ? "even" : "odd";
        console.log(numbers[row][col]);
    }
}

// Add account summary to return account message

var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    printAccountSummary: function summary() {
        var summary = "Welcome!\nYour balance is currently $" + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent +"%.";
        return summary;
    }
};

console.log(savingsAccount.printAccountSummary());

// Create an object with three properties. The object should also have 4 methods. 

facebookProfile = {
    name: "Nic",
    friends: 300,
    messages: ["hello"],
    postMessage: function postMessage(message) {
        return messages = facebookProfile.messages.push(message);
    },
    deleteMessage: function deleteMessage(index) {
        return remove = facebookProfile.messages.splice(index, 1);
    },
    addFriend: function addFriend() {
        return facebookProfile.friends += 1;
    },
    removeFriend: function removeFriend() {
        return facebookProfile.friends -= 1;
    }
};

console.log(facebookProfile.postMessage("hiya"));
console.log(facebookProfile.messages);
console.log(facebookProfile.deleteMessage(0));
console.log(facebookProfile.messages);

// Use forEach to loop over array and print out donut summaries

var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

donuts.forEach(function(donut) {
    console.log(donut.type + " donuts cost $" + donut.cost + " each");
});