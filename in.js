let [p, q] = [0, 1];//let declaration
function nextFibo() {
        [p, q] = [q, p + q];
        return q;
}
let fibs = []; 
while (true){
	let n = nextFibo();
    if (n > 10000)
        break;
    fibs.push(n)
}
let [fib1, , fib3, ...therest] = fibs; //deconstructor and spread
let halfTheRest = therest.map(x => x/2); //arrow function