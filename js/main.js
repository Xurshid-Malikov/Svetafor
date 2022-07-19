var elSvetafor = document.getElementsByClassName("color");
function svetafor(sveta1, sveta2, qizil, sariq, yashil) {
	var timeoutId = setInterval(function () { 
		qizil.classList.add("red");
		qizil.innerHTML = sveta1;
		qizil.classList.add("bgcolor");
		if(sveta1 == 3) {
			sariq.innerHTML = ""; 
			sariq.classList.add("yellow");
			setTimeout(function() {
				qizil.classList.remove("red");
			}, 500);
		}
		sveta1--;
		if (sveta1 == 0){
			clearInterval(timeoutId);
			sariq.classList.remove("yellow", "bgcolor");
			qizil.classList.remove("red");
			var timeId = setInterval(function() {
				yashil.classList.add("green");
				yashil.innerHTML = sveta2;
				yashil.classList.add("bgcolor");
				if(sveta2 <= 3) {
					setTimeout(function() {
						yashil.classList.remove("green");
					}, 500);
				}
				if(sveta2 <= 1) {
					clearInterval(timeId);
					sariq.innerHTML = "";
					sariq.classList.remove("bgcolor");
				}
				sveta2--;
			}, 1000);
		}
	},1000);
}
var totalSveta;
function svetaTime(counterOne, counterTwo) {
	var svetafOne = counterOne * 1000;
	var svetafTwo = counterTwo * 1000;
	totalSveta = (svetafOne + svetafTwo);
	return totalSveta;
}
setTimeout(function restartCounter() {
	var addsveOne = 15;
	var addsveTwo = 15;
	svetaTime(addsveOne, addsveTwo,);
	svetafor(addsveOne, addsveTwo, elSvetafor[0], elSvetafor[1], elSvetafor[2]);
	setTimeout(restartCounter, totalSveta);
},200);
