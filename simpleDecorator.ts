function simpleDecorator(constructor: Function) {
    console.log('simpleDecorator called.');
}

function secondDecorator(constructor: Function) {
    console.log('secondDecorator called.');
}

// 적용한 순서 반대로 호출
@simpleDecorator
@secondDecorator
class ClassWithSimpleDecorator {
    
}

// 많은 인스턴스를 만들어 사용해도 데커레이터 함수는 한 번만 호출됨
// let instance_1 = new ClassWithSimpleDecorator();
// let instance_2 = new ClassWithSimpleDecorator();

// console.log(`instance_1 : ${instance_1}`);
// console.log(`instance_2 : ${instance_2}`);