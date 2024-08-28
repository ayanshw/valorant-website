function clickeventpb() {
    window.open("./pbaction.html","_self");
}
// function carpage() {
//     var b=confirm("Are You Sure???");
//     if(b)
//     {
//         alert("You will be redirected!!!");
//         window.open("https://www.riotgames.com/en/work-with-us/jobs","_self");
//     }
//     else{
//         window.open("index.html","_self");
//     }
// }

function downloadbtn() {
    document.getElementById("dlbtnlink").click();
}
function downloadbtn2(){
    document.getElementById("dlbtnlink2").click();
}
function mainpg() {
    window.open("./index.html","_self"); 
}
function skewan() {
    var a=document.getElementById("newspanid");
    a.style.transform="translateX(-96%) skew(-20deg)";
    a.style.transition="0.2s ease-in"
    var b=document.getElementById("dlbtnh1");
    b.style.color="white";
    b.style.transition="0.3s ease-in"
}
function skewan2(){
    var a=document.getElementById("newspanid2");
    a.style.transform="translateX(-96%) skew(-20deg)";
    a.style.transition="0.2s ease-in"
    var c=document.getElementById("dlbtnh12");
    c.style.color="white";
    c.style.transition="0.3s ease-in"
}
function skewout(){
    var a=document.getElementById("newspanid");
    a.style.transform="translateX(-200%) skew(-20deg)";
    a.style.transition="0.2s ease-out"
    var b=document.getElementById("dlbtnh1");
    b.style.color="black";
    b.style.transition="0.3s ease-in"
}
function skewout2(){
    var a=document.getElementById("newspanid2");
    a.style.transform="translateX(-200%) skew(-20deg)";
    a.style.transition="0.2s ease-out"
    var c=document.getElementById("dlbtnh12");
    c.style.color="black";
    c.style.transition="0.3s ease-in"
}