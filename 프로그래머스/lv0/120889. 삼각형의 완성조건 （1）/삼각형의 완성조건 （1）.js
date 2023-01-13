function solution(sides) {

let answer = sides.sort((a, b) => a - b);

if (answer[0] + answer[1] > answer[2]) {
    a = 1;
} 
else{
    a = 2;
}   

    return a
}