

//No tengo ni pinche idea de por que, pero este script y el q esta comentado abajo me ha estado dando problemas desde el principio .-.
//const btn = document.getElementById("btn");

//btn.addEventListener("click", () => {

//    if (btn.value === "Red") {
//        btn.value = "Blue";
//    } else {
//        btn.value = "Red";
//    }
//})


function activePoke() {


}


function selectedBall(pokeID) {
    var i, pokecontent, pokelinks;
    pokecontent = document.getElementsByClassName("pokeball");
    for (i = 0; i < pokecontent.length; i++) {
        pokecontent[i].style.display = "none";
    }
    pokelinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        pokelinks[i].className = pokelinks[i].className.replace(" active", "");
    }
    document.getElementById(pokeID).style.display = "block";
    evt.currentTarget.className += " active";
}

function selectPokeball(pokeID) {

    var i, pokecontent, pokelinks;
    pokecontent = document.getElementsByClassName("pokeball");
    for (i = 0; i < pokecontent.length; i++) {
        pokecontent[i].className = "pokeball";

    }
    for (i = 0; i < pokecontent.length; i++) {

        if (pokeID == pokecontent[i].id) {
            pokecontent[i].className = "active pokeball"

        }

    }

}

function actBtn(pokeId) {
    // Add active class to the current button (highlight it)

    var header = document.getElementById("herePoke");
    var btns = header.getElementsByClassName("pokeball");

    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active");
            if (current.length > 0) {
                current[0].className = current[0].className.replace(" active", "");
                alert("3");
            }
            getElementById(pokeId).className += " active";
        });
    }

}

//No tengo ni pinche idea de por que, pero lo de aca abajo y el code del inicio del script me han estado dando problemas dede el principio .-.
//var hder = getElementById("stayHeader")

//var Clip = new Audio();
//Clip.src = "Resources/Snd/Small.mp3";
//Clip.volume = 100;

function playSnd()
{
    
    Clip.pause();
    Clip.currentTime = 0;
    Clip.play();
}


function myFunction() {
    window.open("https://www.w3schools.com");
}

//---------------------------------------------------------//

const pokeImg = ["Resources/Img/misigno.png", "Resources/Img/charmander.png", "Resources/Img/squirtle.png", "Resources/Img/bullbasour.png"];
const pokeName = ['*/-+!"!"#$!"%#$&#', 'Charmander', 'Squirtle', 'Bulbasaur'];
const pokeAtk = ["- ", "Growl", "Tackle", "Scratch", "Ember", "Water Gun", "Vine Whip"];

var mypokeName = "noname";
var myatk1 = "- ";
var myatk2 = "- ";
var myatk3 = "- ";
var myatk4 = "- ";

function setAllPoke(pokeNum, at1, at2, at3, at4) {
    changePoke(pokeNum);
    setAtks(at1, at2, at3, at4);
    RefreshData();
}

function changePoke(pokeNum) {

    namID = "PokeNameItem";
    imgID = "PokeImgItem";
    document.getElementById(imgID).src = pokeImg[pokeNum];

    document.getElementById(namID).innerHTML = pokeName[pokeNum];


}

function setAtks(num1, num2, num3, num4) {

    atk1ID = "a1";
    atk2ID = "a2";
    atk3ID = "a3";
    atk4ID = "a4";

    document.getElementById(atk1ID).innerHTML = pokeAtk[num1];
    document.getElementById(atk2ID).innerHTML = pokeAtk[num2];
    document.getElementById(atk3ID).innerHTML = pokeAtk[num3];
    document.getElementById(atk4ID).innerHTML = pokeAtk[num4];


}



var pokeData = {
    pokemonName: mypokeName,
    atack_one: myatk1,
    atack_two: myatk2,
    atack_three: myatk3,
    atack_four: myatk4
};

//var obj = { name: "John", age: 30, city: "New York" };
function RefreshData() {
    pokeData["pokemonName"] = document.getElementById(namID).innerHTML;
    pokeData["atack_one"] = document.getElementById(atk1ID).innerHTML;
    pokeData["atack_two"] = document.getElementById(atk2ID).innerHTML;
    pokeData["atack_three"] = document.getElementById(atk3ID).innerHTML;
    pokeData["atack_four"] = document.getElementById(atk4ID).innerHTML;
}

function downloadData() {
    var jsonData = JSON.stringify(pokeData);
    var blob = new Blob([jsonData], { type: 'application/json' });

    var elemnt = document.createElement('a')
    elemnt.download = "pokeJsonData.json";
    elemnt.href = window.URL.createObjectURL(blob);
    elemnt.innerHTML = jsonData;

    elemnt.click();
    //document.getElementById("dwld").append(elemnt);

}



