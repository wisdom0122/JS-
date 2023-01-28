function solution(numbers) {
    var answer = numbers.sort(function(a,b){
        return a-b});
    var answer = answer.reverse();
    var a = answer[0]*answer[1]
    return a;
}