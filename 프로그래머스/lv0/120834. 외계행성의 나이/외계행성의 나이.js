function solution(age) {
let answer = [];
const arr = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65)); 
const brr = Array.from(String(age));
for(let j = 0; j < brr.length; j++){
 answer.push(arr[brr[j]].toLowerCase());   
} return answer.join("");
}