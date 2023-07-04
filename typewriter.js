let sentence = "hello there from lighthouse labs";

let time = 0;

for (const char of sentence) {
  setTimeout(() => process.stdout.write(char), time += 50);
}

setTimeout(() => process.stdout.write("\n"), time);