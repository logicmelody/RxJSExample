import {
	fromEvent,
	merge,
} from "rxjs";

import {
	map,
	mapTo,
	scan,
} from "rxjs/operators";

// fromEvent(window, 'click').pipe(
// 	map(e => e.target),
// ).subscribe(value => {
// 	console.log(value);
// })


// fromEvent(window, 'click').pipe(
// 	map(e => 1),
// 	scan((total, now) => total + now),
// ).subscribe(value => {
// 	document.getElementById('counter').innerText = 'count = ' + value;
// })


const plusObservable = fromEvent(document.getElementById('plus-button'), 'click').pipe(
	mapTo(1)
);
const minusObservable = fromEvent(document.getElementById('minus-button'), 'click').pipe(
	mapTo(-1)
);

merge(plusObservable, minusObservable).pipe(
	scan((total, now) => total + now),
).subscribe(value => {
	document.getElementById('counter').innerText = 'count = ' + value;
});
