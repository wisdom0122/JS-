function solution(n) {
    let num1 = n;
    let num2 = 6;
    const gcd = (a,b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a,b) => a * b / gcd(a,b);
    
    return n/gcd(num1,num2)
}
