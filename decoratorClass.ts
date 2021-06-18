function classConstructorDec(constructor: Function) {
    console.log(`constructor: ${constructor}`);
    console.log(`constructor.name: ${(<any>constructor).name}`);
    constructor.prototype.testProperty = "testProperty_value";
}

@classConstructorDec
class ClassWithConstructor {}

let classConstrInstance = new ClassWithConstructor();
console.log(`classConstrInstance.testProperty: `
    + `${(<any>classConstrInstance).testProperty}`);