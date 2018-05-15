export function throttle(fn, context = null, delay, mustRunInDelay, RunInFirstTime){
	let timer = null,
		first = true,
		start = null,
		end = null,
		args = null,
		calledFn = (args) => {
			fn.apply(context, args);
		};
	return (...a) => {
		args = a;
		if (first) {
			start = Date.now();
			first = false;
			if (RunInFirstTime) {
				fn.apply(context, args);
			} else {
				timer = later(calledFn, delay);
			}
		} else {
			end = Date.now();
			clearTimeout(timer);
			if ( end - start > mustRunInDelay) {
				fn.apply(context, args);
				start = Date.now();
			} else {
				timer = setTimeout(() => {
					fn.apply(context, args);
					first = true;
				}, delay);
			}
		}
	}
}

function later(fn, delay){
	return setTimeout(fn, delay);
}


export const storage = (() => {
	return {
		set(key, value) {
			
		},
		get() {

		},
		clear() {

		},
		remove() {

		}
	}
})()