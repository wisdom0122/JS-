function solution(numbers) {
    const arr = Array.from(numbers).sort((a,b)=>{return a-b});
    const min = arr[0]*arr[1]
    const max = arr[arr.length-1]*arr[arr.length-2]
    if(min>max){return min}
    else{
        return max
    }
}