function solution(my_string) {
    let char = Array.from(my_string)
    const num = char.filter(n => !isNaN(n))
    const answer = num.map(Number).reduce((acc,cur)=>{return acc += cur},0) 
    return answer;
}