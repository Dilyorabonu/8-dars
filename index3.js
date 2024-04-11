let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

//1
function multiplyNumeric(obj) {
    let newObj = {};
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            newObj[key] = obj[key] * 2;
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

menu = multiplyNumeric(menu);

console.log(menu);

//2
function multiplyNumeric(obj) {
    return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => 
            typeof value === 'number' ? [key, value * 2] : [key, value]
        )
    );
}

console.log(menu);