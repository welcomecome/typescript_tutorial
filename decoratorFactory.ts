function decoratorFactory(name: string) {
    return function (constructor: Function) {
        console.log(`decorator function called with : ${name}`);
    }
}

@decoratorFactory('testname')
class ClassWithDecoratorFactory {

}