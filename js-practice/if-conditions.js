const goals = 23;

if (goals % 2 === 0){
    console.log("Even season");
} else{
    console.log("odd season");
}

if (goals >= 30){
    console.log("World Class Season");
} else if(goals >= 20){
    console.log("Elite Winger season");
} else{
    console.log("keep pushing");
}

const typeOfSeason = goals >= 20 ? "world class season" : "average season";
console.log(typeOfSeason);

switch (true){
    case goals >= 20:
        console.log("good season");
        break;
    case goals >= 30:
        console.log("world class season");   
        break;


}