function myFunction() {
document.getElementById("search").value=null;
}
function submit(){
 var in3=document.getElementById("nm").value;
 var in4=document.getElementById("ph").value;
 if(in3===null){
  document.getElementById('note1').style.display='block';
 }
 if(in4===null){
  document.getElementById('note2').style.display='block';
 }
 if(in3!=null&&in4!=null){
  document.getElementById('gayab').style.display='none';
  document.getElementById('thanku').style.display='block';
 }
}
function login() {
var in1=document.getElementById("input1").value;
var in2=document.getElementById("input2").value;
if(in1===""||in2==="")
{
window.alert("Enter username and password! ");
document.getElementById("input1").value=null;
document.getElementById("input2").value=null;
}
else{
 document.getElementById('log').style.display='none';
 document.getElementById('us').style.display='block';
}
}
function call(){
 window.open("next.html");
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
document.getElementById('connect').style.display='block';
document.getElementById('rank').style.display='block';
}

