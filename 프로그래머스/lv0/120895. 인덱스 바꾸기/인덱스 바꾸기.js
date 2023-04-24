function solution(my_string, num1, num2) {
    const n1 = my_string[num1];
    const n2 = my_string[num2];
    const arr = Array.from(my_string);
    arr[num1] = n2;
    arr[num2] = n1;
      
    return arr.join("");
}