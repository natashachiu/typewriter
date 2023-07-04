let sentence = "hello there from lighthouse labs";

let time = 0;
sentence = sentence + "\n";

for (const char of sentence) {
  setTimeout(() => process.stdout.write(char), time += 50);
}