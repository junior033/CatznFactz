
function welcomePrompt(){

alert("Welcome to Catz N Factz!");
let userName =  prompt("What is your name?");
1
    while (userName == ""){
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

function howManyCatz(number){
    
    for(i = 0; i <= number; i++){
        if(i==1){
        document.write("<img src='https://i.pinimg.com/236x/1b/ef/b5/1befb5723f54627768e1d77642ca4d45.jpg'>");
        }
        if(i==2){
        document.write("<img src='https://cdn.pixabay.com/photo/2014/05/07/06/44/cat-339400__340.jpg'>");
        }
        if(i==3){
        document.write("<img src='https://icatcare.org/app/uploads/2018/10/What-is-a-cat.png'>");
        }
        if(i==4){
        document.write("<img src='https://d.newsweek.com/en/full/1920025/cat-its-mouth-open.jpg?w=1600&h=1200&q=88&f=e4241cd2c228c6e075a0ac0d54c8ef395'>");
        }
        if(i==5){
        document.write("<img src='https://i.ytimg.com/vi/iwMqsKDTdQ0/maxresdefault.jpg'>");
        }
    }
}