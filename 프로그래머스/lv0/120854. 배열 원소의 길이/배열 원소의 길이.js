function solution(strlist) {
    var answer = [];
    var index = 0;
    for (let i of strlist){
        answer[index++]= i.length;
        
    }
    
    return answer;
}