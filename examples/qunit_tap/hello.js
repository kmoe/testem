function hello(name){
    failEveryTime();
    return "hello " + (name || 'world');
}

function failEveryTime() {
    throw new Error();
}

module.exports = hello;
