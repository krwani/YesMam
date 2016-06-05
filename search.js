function myFunction() {
document.getElementById("search").value=null;
}

var chrt = document.getElementById("graphs").getContext("2d");

var data = {
    labels: ["Above Average", "Below Average"], //x-axis
    datasets: [
        {
            label: "Section Wise Performance", //optional
            strokeColor: "rgba(220,220,220,0.8)",
            
            highlightStroke: "rgba(220,220,220,1)",
            
            data: [33, 66] // y-axis
        }
    ]
};

var Chart = new Chart(chrt).Bar(data);
