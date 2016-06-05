function myFunction() {
document.getElementById("search").value=null;
}
function login() {
window.open("Wrong username and password! ");
document.getElementById("search").value=null;
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
document.getElementById("b").innerHTML= "Chapter 1";
gy();}
function fun5(){
document.getElementById("b").innerHTML= "Chapter 2";
gy();}
function fun6(){
document.getElementById("b").innerHTML= "Chapter 3";
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
}

