class classWithAutomaticProperties {
    constructor (public id: number, private name: string) {

    }
}

let myAutoClass = new classWithAutomaticProperties(1, "classname");
console.log(`myAutoClass id : ${myAutoClass.id}`);
// generates a complie error
console.log(`myAutoClass name : ${myAutoClass.name}`);