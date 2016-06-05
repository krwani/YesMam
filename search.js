function myFunction() {
document.getElementById("search").value=null;
}


window.onload = function () {
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
