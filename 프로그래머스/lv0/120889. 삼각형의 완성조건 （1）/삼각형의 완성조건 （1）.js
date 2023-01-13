function solution(sides) {

let answer = sides.sort(function (a, b) {
    return a - b;
});

if (answer[0] + answer[1] > answer[2]) {
    a = 1;
} 
else if (answer[0] + answer[1] <= answer[2]){
    a = 2;
}   

    return a
}