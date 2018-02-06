async function a(){
	var a = await 10;
	return a;
}

var b = a();
b.then((val)=>{
	console.log(val)
})