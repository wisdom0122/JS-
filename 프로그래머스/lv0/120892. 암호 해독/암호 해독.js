function solution(cipher, code) {
    let cipherArr = Array.from(cipher);
    const answer = cipherArr.filter((element,index) =>{
        if (index % code === code-1){
            return element
        }
    } )
    return answer.join('');
}