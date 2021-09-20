//Write code below this line

//Write code above this line

//myVariable is not defined outside of localScope

function localScope() {
    var myVariable = "I am here!";

    console.log(myVariable);
}

localScope();

module.exports = localScope;