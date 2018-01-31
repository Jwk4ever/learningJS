//cookie方法

let CoolieUtil = {
	get: function(){

	},
	set: function(){

	},
	unset: function(){

	}
}

// storage对象

// IndexDB 

function openIndexDB(name){
			return new Promise((resolve, reject) => {
				let request = indexedDB.open(name);
				request.onerror = (event) => {
					resolve(event.target.errorCode);
				};
				request.onsuccess = (event) => {
					resolve(event.target.result);
				}
			})
		}