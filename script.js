

function welcomePrompt(){

alert("Welcome to Catz N Factz!");
let userName =  prompt("What is your name?");

    if (userName == ""){
        userName = prompt("You did not enter a name, what is your name?");
    } 
    return catsOrDogs(userName);
}

function catsOrDogs(userName){

    let proceed = confirm("Do you want to see some cats " + userName + "?")
    if (proceed){
        alert( "Today's your lucky day " + userName + "! Enjoy the cute cat pictures!");
    }else{
        window.location.href = ("https://www.rd.com/list/dog-facts-you-didnt-know/");
    }
}