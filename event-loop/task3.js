console.log('1');
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
    	console.log('9');
})
console.log('11'); 