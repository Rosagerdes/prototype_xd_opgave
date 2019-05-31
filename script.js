// Hvis du er på loginsiden, vises en disclaimer i form af en alert der popper frem

if (document.querySelector("body.login") !== null) {
    alert("Dette er en projekt opgave lavet i forbindelse med uddannelsen Multimediedesign på KEA, og derfor ikke en rigtig side. Denne side er derfor hverken associeret med KEA eller Fronter.");
}

/*lyttes efter at siden er loaded og så vil siden vises*/
window.addEventListener("load", sidenVises);



//Når siden vises lyttes efter om Burgermenuen får et klik. Når der er et klik, går den videre til funktionen.
function sidenVises() {
    console.log("sidenVises");

    document.querySelector("header .menu_toggle").addEventListener("click", toggleMenu);
}

//Når der er klikket får nav'en class'en "active" på. Når nav'en er "active" er den true og skifter (toggler) textcontent "stiber" ud med et "X". Hvis den ikke er active (hvis der bliver trykket igen) Skifter (toggler) den til stiber igen.

function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("header nav").classList.toggle("active");

    let erAktiv = document.querySelector("header nav").classList.contains("active");

    if (erAktiv == true) {
        document.querySelector("header .menu_toggle").textContent = "X";
    } else {
        document.querySelector("header .menu_toggle").textContent = "☰";
    }
}

/*Der lyttes efter et klik i theme_descr. Når klikket kommer bliver class'en "open" tilføjet. Den overskriver deklaration'en display: none i css'en på class'en "previous ass"*/

document.querySelector(".theme .theme_descr").addEventListener("click", toggleAssignments);

function toggleAssignments() {
    console.log("toggleAssignments");
    this.closest(".theme").classList.toggle("open");
}
