const sentence = "hello there from lighthouse labs";

for (let char = 0; char < sentence.length; char++) {
    (function (char) {
        setTimeout(() => {
            process.stdout.write(sentence[char]);
            if (char === sentence.length - 1) process.stdout.write('\n');
        }, char * 50);
    }(char))
}
