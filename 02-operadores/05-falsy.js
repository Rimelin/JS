//short-circuit

//que devuelve falso? (valores falsy)
// false0
// ''
// nullundefined
// Nan

let nombre = '';
let username = nombre || 'anonimo';
console.log(username);
nombre ="Rick";
username = nombre || 'anonimo';
console.log(username);

function fn1 () {
    console.log('fn1')
    return false;
}

function fn2 () {
    console.log('fn2');
    return true;

}

let x = fn1() && fn2();