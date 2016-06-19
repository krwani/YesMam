function myFunction() {
document.getElementById("search").value=null;
document.getElementById('clg').style.visibility='hidden';
document.getElementById('user').style.visibility='visible'; 
}
function login() {
document.getElementById("input").value=null;
window.alert("Wrong username and password! ");
}

function fun1(){
document.getElementById("b").innerHTML= "Physics";
}
function fun2(){
document.getElementById("b").innerHTML= "Chemistry";
}
function fun3(){
document.getElementById("b").innerHTML= "Mathematics";
}
function fun4(){
document.getElementById("c").innerHTML= "Chapter 1";
gy();}
function fun5(){
document.getElementById("c").innerHTML= "Chapter 2";
gy();}
function fun6(){
document.getElementById("c").innerHTML= "Chapter 3";
gy();}

function gy() {
 var chart = new CanvasJS.Chart("graphs",
 {
  animationEnabled: true,
  title:{
   text: "Section Wise Performance"
  },
  data: [
  {
   type: "column", //change type to bar, line, area, pie, etc
   dataPoints: [
    { label: "Above Average", y: 33 },
    { label: "Below Average", y: 66 },
   ]
  }
  ]
 });
 chart.render();

document.getElementById("connect").innerHTML = "Connect with us!";
document.getElementById('connect').style.visibility='visible';
document.getElementById('rank').style.visibility='visible';
}

