function solution(my_string) {
    let arr = Array.from(my_string);
    let arr1 = arr.filter(el => !isNaN(el));
    let arr2 = arr1.sort().map(el => Number(el))
    return arr2;
}