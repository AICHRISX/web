console.log(1);
console.log(document.getElementById('box'));
document.addEventlistener("DOMcontentloaded",function(){
	console.log("DOMcontentloaded-1")
})