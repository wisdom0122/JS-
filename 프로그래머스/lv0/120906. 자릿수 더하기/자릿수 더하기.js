function solution(n) {
    let arr = Array.from(String(n))
    const answer = arr.map(Number).reduce((acc,cur)=>{ return acc +=cur})
    return answer;
}