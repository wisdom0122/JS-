function solution(array, height) {
    var answer = array.filter(i => i>height)
    return answer.length;
}

// 배열에서 hight보다 키 큰 사람의 값만 빼서 count한다.