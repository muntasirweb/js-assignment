//function to Calculate feet to mile

function feetToMile(feet){
    if(feet > 0){
        var result = feet/5280;
    }
    else{
        var result = "O mile because distance cant be negetive!";
    }
    return result;
}

//function that returns number of wood required for chair/table/bed

function woodCalculator(noOfChair, noOfTable, noOfBed){
    var noOfchair = noOfChair;
    var tableWoods = noOfTable*3;
    var bedWoods = noOfBed*5;
    var totalWoods = noOfchair+tableWoods+bedWoods; 
    return totalWoods;
}

//function that calculates amount of bricks required for a building.

function brickCalculator(noOfFloor){
    if(noOfFloor>0){
        if (noOfFloor > 20){
            var till20thfloor = 270000;
            var extraFloor = noOfFloor - 20;
            var extraBricks = extraFloor*10000;
            var totalBricks = till20thfloor+extraBricks; 
            return totalBricks;
        }
        else if(noOfFloor > 10){
            var till10thfloor = 150000;
            var extraFloor = noOfFloor - 10;
            var extraBricks = extraFloor*12000;
            var totalBricks = till10thfloor+extraBricks; 
            return totalBricks;
        }
        else{
            var totalBricks = noOfFloor*15000;
            return totalBricks;
        }
    }
    else{
        var totalBricks = "0. Because building can't be negetive storied";
        return totalBricks;
    }
}

//function that returns the tiniest name from an array

function tinyFriends(friendList){
    if(friendList.length){
        var smallestName = friendList[0];
        for(var i = 0; i<friendList.length; i++){
            var currentName = friendList[i];
            if (currentName.length < smallestName.length){
                smallestName = currentName;
            }
        }
    }
    else{
        var smallestName = "You have entered an empty array";
    }
    return smallestName;
}

var noOfMiles = feetToMile(10560);
console.log("The result is", noOfMiles);

var woods = woodCalculator(1, 5, 9);
console.log("Total ", woods, "cubic feet woods required"); 

var bricks = brickCalculator(12);
console.log(bricks);

var friendList = ["Muntasir", "Rana", "Joe", "Evan"];
var tiniestName = tinyFriends(friendList);
console.log(tiniestName);