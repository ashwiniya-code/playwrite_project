//1. check if a number is prime or not
function isPrime(num){
    if(num <= 1) return false;
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0) return false;
    }
    return true;
}
    console.log(isPrime(7)); //true
    console.log(isPrime(10)); //false

//2. check if a number is prime or not using recursion
function isPrimeRecursive(num, divisor = 2){
    if(num <= 1) return false;
    if(divisor > Math.sqrt(num)) return true;
    if(num % divisor === 0) return false;
    return isPrimeRecursive(num, divisor + 1);
}
    console.log(isPrimeRecursive(7)); //true
    console.log(isPrimeRecursive(10)); //false

