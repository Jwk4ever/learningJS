export function throttle (fn, internal = 500){
	let self = fn,
		timer,
		first_time = true;

	return function (){
		let args = arguments,
			that = this,

		if(first_time){
			self.call(that, args);
			first_time = false;
		}

		if(timer){
			return ;
		}

		timer = setTimeout(() => {
			clearTimeout(timer);
			timer = null;
			self.call(that, args);
		}, internal);
	}
}