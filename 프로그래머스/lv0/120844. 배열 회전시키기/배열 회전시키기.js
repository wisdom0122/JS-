function solution(numbers, direction) {
    let arr = numbers;
    if(direction=="left"){
        arr.push(numbers[0]);
        arr.shift();
    } else{
        arr.unshift(numbers[numbers.length-1]);
        arr.pop();
    }
    return arr;
}