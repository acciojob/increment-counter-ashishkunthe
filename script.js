//your JS code here. If required.
const btn=document.getElementById("button")
let count=0
btn.addEventListener("click",()=>{
	alert(count)
	document.getElementById("counter").innerText=count
	count++
}) 

