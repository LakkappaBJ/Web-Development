/**
 * 
 */
 function mult(){
	var number1=document.getElementById('number1').value;
	var number2=document.getElementById('number2').value;
	document.getElementById('result').innerHTML=(number1*number2);
}
function add(){
	var number1=document.getElementById('number1').value;
	var number2=document.getElementById('number2').value;
	var sum =parseInt(number1)+parseInt(number2);
	document.getElementById('result').innerHTML=(sum);
}
function division(){
	var number1=document.getElementById('number1').value;
	var number2=document.getElementById('number2').value;
	document.getElementById('result').innerHTML=(number1/number2);
}
function sub(){
	var number1=document.getElementById('number1').value;
	var number2=document.getElementById('number2').value;
	document.getElementById('result').innerHTML=(-(number1-number2));
}
function avg(){
	var number1=document.getElementById('number1').value;
	var number2=document.getElementById('number2').value;
	var sum =parseInt(number1)+parseInt(number2);
	document.getElementById('result').innerHTML=(sum/2);
}
function mod(){
	var number1=document.getElementById('number1').value;
	var number2=document.getElementById('number2').value;
	
	document.getElementById('result').innerHTML=number1%number2;
}