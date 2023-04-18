function solution(array) {
    if(array.length === 1) return array[0];
    
    //map 객체 초기화
    let map = new Map();
    for(let i=0; i <= Math.max(...array); i++){
        map.set(i,0);
    }
    for(let i=0; i < array.length; i++){
        map.set(array[i],map.get(array[i])+1)
    }
    
    const arr = Array.from(map.values());
    const max = Math.max(...arr);
    
    //최댓값이 하나만 있다면 max, 여러 개 중복된다면 -1 출력
    if(arr.indexOf(max) !== arr.lastIndexOf(max)){
        return -1
    }else{
        return arr.indexOf(max);
    }
}