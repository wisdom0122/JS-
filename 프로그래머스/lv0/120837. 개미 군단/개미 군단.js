function solution(hp) {
    const a = parseInt(hp/5) ; 
    const b = parseInt((hp%5)/3);
    const c = (hp%5) % 3
    return a+b+c ;
}