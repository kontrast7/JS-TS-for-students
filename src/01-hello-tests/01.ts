const sentence = "hello world";

export function splitWords(sentence: string) {
  return sentence.toLowerCase().split(" ").map(w => w.replace("!", ""));
}

export function sum(a: number, b: number) {
  return a + b;
}
export function mult(a: number, b: number) {
  return a * b;
}
