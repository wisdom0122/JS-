function solution(num_list) {
    var answer = [];
    answer[0] = num_list.filter((i) => i%2 == 0).length;
    answer[1] = num_list.length - answer[0];
    return answer;
}