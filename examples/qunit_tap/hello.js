function hello(name){
    throw new Error();
    return "hello " + (name || 'world');
}

module.exports = hello;
