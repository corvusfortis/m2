console.log('1'); //to main
setTimeout(() => {
 	console.log('2');
 	Promise.resolve().then(() => console.log('3')).then(() => console.log('4'));
}, 0);
setTimeout(() => {
 	console.log('5');
}, 0);
Promise.resolve().then(() => console.log('6')).then(() => console.log('7'));
new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log('8')
	})
    	Promise.resolve().then(() => console.log('10'))
    	console.log('9'); //to main (body of promise = main)
})
console.log('11'); //to main

//main: 1, 11
//micro: 6, 7, 8(to mac), 10(to mic), 9(to main)
//macro: 2, 3(to mic), 4(to mic), 5,

//console: 1, 9, 11, 6, 7, 2, 10, 3, 4, 5, 8