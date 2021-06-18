function concatStrings(a: string, b: string, c?: string) {
    return a + b + c;
}

var concat3Strings = concatStrings("a", "b", "c");
console.log(`concat3Strings : ${concat3Strings}`);

var concat2Strings = concatStrings("a", "b");
console.log(`concat2Strings : ${concat2Strings}`);

// var concat1String = concatStrings("a");