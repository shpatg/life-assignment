2;
3;
4;
5;
6;
7;
8;
9;
10;
11;
12;
13;
14;
15;
16;
17;
18;
19;
20;
21;
22;
23;
24;
25;
26;
27;
28;
29;
30;
31;
32;
33;
34;
35;
36;
37;
38;
//global variables
var timer;
var marginTop = 360;
var bottomToTop = true;

//method to jump the ball
function jumpBall() {
	var ball = document.getElementById("ball");
	if (bottomToTop) {
		marginTop -= 10;
	} else {
		marginTop += 10;
	}

	ball.style.marginTop = marginTop + "px";
	if (marginTop == 60) {
		bottomToTop = false;
	}
	if (marginTop == 360) {
		bottomToTop = true;
	}
}

//method to handle start/stop of jumping ball
function start() {
	var btn = document.getElementById("start-btn");
	if (btn.innerHTML.trim() === "Start") {
		//start jumping the ball
		timer = setInterval(function () {
			jumpBall();
		}, 100);
		btn.innerHTML = "Stop";
	} else {
		//stop jumping the ball
		clearInterval(timer);
		btn.innerHTML = "Start";
	}
}
