let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

//1

function Jami(obj) {
    let jamioylik = 0;
    for (let key in obj) {
        jamioylik += obj[key];
    }
    return jamioylik;
}

console.log(Jami(salaries));

//2

function Jami(obj) {
    return Object.values(obj).reduce((a, b) => a + b, 0);
}

console.log(Jami(salaries));

//3

function Jami(obj) {
    let jamioylik = 0;
    Object.keys(obj).forEach(key => jamioylik += obj[key]);
    return jamioylik;
}

console.log(Jami(salaries));

//4

function Jami(obj) {
    return Object.keys(obj).reduce((a, key) => a + obj[key], 0);
}

console.log(Jami(salaries));