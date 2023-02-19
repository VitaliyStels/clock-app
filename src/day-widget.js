let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function getTime() {
	var now = new Date;
	var day = days[now.getDay()];
	var currentTime = now.toLocaleTimeString();
	
	document.getElementById("timeField").innerHTML = ""
	document.getElementById("dayField").innerHTML = day
	document.getElementById("timeField").innerHTML = currentTime
}

//function switchColorBeige() {
	//var dayFieldElement = document.getElementById("dayField")
	//dayFieldElement.classList.add("switchColorBeige")
	//console.log("switch func")
	//print("sw col beige")
//}
getTime()
setInterval(getTime, 10000);
