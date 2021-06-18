class ClassWithReadOnly {
    readonly name: string;
    constructor(_name: string) {
        this.name = _name;
    }
    setReadOnly(_name: string) {
        // generates a complie error
        this.name = _name;
    }
}