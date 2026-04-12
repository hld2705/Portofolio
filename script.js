function init(){
    languageElipse()
}


//Iz ove funkcije dodati da se tranzicijom sa DE klasa "elipse" prebaci na en i automatski prevede(najpozeljnije u novoj funkciji)
function languageElipse(){
    let de = document.getElementById("de");
    let en = document.getElementById("en");
    de.classList.add("elipse");

}
