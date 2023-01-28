function solution(my_string, n) {
    const answer = [...my_string].map(a=>a.repeat(n)).join("");
    
        
    
    return answer;
}