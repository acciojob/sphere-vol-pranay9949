
let btn=document.getElementById("submit");
btn.addEventListener("click",(e)=>{
	e.preventDefault()
	let red=document.getElementById("radius");
	let vol=document.getElementById("volume");
	if(red.value!==""){
	let a=red.value;
	let b=(4/3)*3.14*(a*a*a);
	vol.value=b;
	}
})