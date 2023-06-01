console.log('вызовется первой');
console.log('вызовется второй');

setTimeout(()=>{
    console.log('вызовется третьей');
},2000);

console.log('вызовется последней');