import {
	Observable,
	fromEvent,
	merge,
	of,
	from,
	interval,
} from "rxjs";

import { ajax } from 'rxjs/ajax';

import {
	map,
	mapTo,
	flatMap,
	switchMap,
	scan,
	takeUntil,
	tap,
	debounceTime,
	startWith,
	filter,
} from "rxjs/operators";

// console.log('Observable start');
// Observable.create(observer => {
// 	observer.next('Jerry');
// 	observer.next('Anna');
// 	observer.complete();
// 	// observer.next('Danny');

// 	setTimeout(() => {
// 		observer.next('5 seconds later');
// 	}, 5000);
// }).subscribe({
// 	next: value => {
// 		console.log(value);
// 	},

// 	complete: () => {
// 		console.log('complete')
// 	},

// 	error: error => {
// 		console.log(error)
// 	},
// });
// console.log('Observable end');


// of(1, 2, 3).subscribe(value => {
// 	console.log(value);
// });


// from([4, 5, 6]).subscribe(value => {
// 	console.log(value);
// });


// fromEvent(window, 'click').subscribe(e => {
// 	console.log('click~');
// });


// fromEvent(window, 'click').pipe(
// 	map(e => e.target),
// ).subscribe(e => {
// 	console.log(e);
// });


// fromEvent(window, 'click').pipe(
// 	map(e => 1),
// 	scan((total, now) => total + now),
// ).subscribe(value => {
// 	document.getElementById('counter').innerText = 'count = ' + value;
// })


// const plusObservable = fromEvent(document.getElementById('plus-button'), 'click').pipe(
// 	mapTo(1)
// );
// const minusObservable = fromEvent(document.getElementById('minus-button'), 'click').pipe(
// 	mapTo(-1)
// );

// merge(plusObservable, minusObservable).pipe(
// 	scan((total, now) => total + now),
// ).subscribe(value => {
// 	document.getElementById('counter').innerText = 'count = ' + value;
// });


// let canvas = document.getElementById('canvas');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// let ctx = canvas.getContext('2d');
// ctx.beginPath(); // 開始畫畫

// function draw(e) {
// 	ctx.lineTo(e.clientX, e.clientY); // 移到滑鼠在的位置
// 	ctx.stroke(); // 畫畫
// }

// fromEvent(canvas, 'mousedown').pipe(
// 	tap(e => ctx.moveTo(e.clientX, e.clientY)),
// 	flatMap(e => fromEvent(canvas, 'mousemove').pipe(
// 		takeUntil(fromEvent(canvas, 'mouseup')),
// 	)),
// ).subscribe(e => {
// 	draw(e);
// });


// fromEvent(document.getElementById('api-button'), 'click').pipe(
// 	flatMap(e =>
// 		ajax(`https://jsonplaceholder.typicode.com/posts/1`).pipe(
// 			map(payload => payload.response),
// 		)
// 	),
// ).subscribe(payload => {
// 	console.log(payload);
// })


// const render = (suggestArray = []) => {
// 	document.getElementById('suggest-list').innerHTML = suggestArray
// 		.map(item => '<li>' + item + '</li>')
// 		.join('');
// }

// fromEvent(document.getElementById('search'), 'input').pipe(
// 	debounceTime(500),
// 	map(e => e.target.value),
// 	switchMap(value =>
// 		ajax({
// 			url: `https://zh.wikipedia.org/w/api.php?action=opensearch&format=json&limit=5&origin=*&search=${value}`,
// 			method: 'GET',
// 		}).pipe(
// 			map(payload => payload.response[1]),
// 		)
// 	)
// ).subscribe(payload => {
// 	render(payload);
// });

// fromEvent(document.getElementById('suggest-list'), 'click').pipe(
// 	filter(e => e.target.matches('li')),
// 	map(e => e.target.innerHTML),
// ).subscribe(value => {
// 	document.getElementById('search').value = value;
// 	render([]);
// });
