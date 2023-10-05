

function toggleHidden() {
    document.getElementById("span").setAttribute('tabindex', '-1');
    noTab();
}
/* hämta element span(hamburgaren)
sätt attribute tabindex så den är borta tab-mässigt
 Kallar på noTab*/

function openNav() {
    document.getElementById("nyMeny").style.height = "85px";
    toggleHidden();
}
/* Hämtar elementet nyMeny och stylar det till 85px hög, alltså menyn rullars nedåt som en rullgardin*/

function closeNav() {
    document.getElementById("nyMeny").style.height = "0";
    resetTab();

}
/* Hämtar elementet nyMeny och stylar det till 0px hög, alltså menyn rullar tillbaka */
/*Kallar på resetTab */



function noTab() {
    document.getElementById("a").setAttribute('tabindex', '0');
    document.getElementById("b").setAttribute('tabindex', '0');
    document.getElementById("c").setAttribute('tabindex', '0');
    document.getElementById("d").setAttribute('tabindex', '0');
    document.getElementById("e").setAttribute('tabindex', '0');

}
/*Gär alla länkar synliga för tab*/

function resetTab() {
    document.getElementById("a").setAttribute('tabindex', '-1');
    document.getElementById("b").setAttribute('tabindex', '-1');
    document.getElementById("c").setAttribute('tabindex', '-1');
    document.getElementById("d").setAttribute('tabindex', '-1');
    document.getElementById("e").setAttribute('tabindex', '-1');
    document.getElementById("span").setAttribute('tabindex', '0');

}
/**Återställer så att hamburgaren är synlig för tab, men inte länkarna */
