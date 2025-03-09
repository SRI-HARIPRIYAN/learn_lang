let exp = "";
function addToExpression(val) {
	exp += val;
	document.getElementById("output").value = exp;
}

function solve() {
	const result = eval(exp);
	document.getElementById("output").value = result;
}

function clr() {
	console.log("first");
	exp = "";
	document.getElementById("output").value = "";
}
