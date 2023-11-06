
let btn=document.getElementById("submit");
btn.addEventListener("click",(e)=>{
	e.preventDefault()
	let red=document.getElementById("radius");
	let vol=document.getElementById("volume");
	if(red.value!==""){
	let a=red.value;
	let b='523.3333333333334;
	vol.value=b;
	}
})