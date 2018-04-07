let baseAjax = function(method, url, data = null){
	return new Promise(function(resolve, reject){	
		let xhr = new XMLHttpRequest();
		xhr.open(method, url, true);
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4 && xhr.status == 200){
				resolve(xhr.responseText);
			}
		}
		xhr.send(data);
	})
}

export let get = baseAjax.bind(null, 'GET');

export let post = baseAjax.bind(null, 'POST');