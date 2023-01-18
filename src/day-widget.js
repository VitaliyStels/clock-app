function getTime() {
	var now = new Date;
	var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
	var day = days[now.getDay()];
	var currentTime = now.toLocaleTimeString();

	document.getElementById("dayField").innerHTML = day
	document.getElementById("timeField").innerHTML = currentTime
}

//function switchColorBeige() {
	//var dayFieldElement = document.getElementById("dayField")
	//dayFieldElement.classList.add("switchColorBeige")
	//console.log("switch func")
	//print("sw col beige")
//}

setInterval(getTime, 1000);
