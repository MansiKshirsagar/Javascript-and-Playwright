function isPrime(num) {
    if (num <=1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(2)); // true

console.log(isPrime(15)); // false


//
function prime(num)
{
    if(num<=1) return false

    for(let i=2;i<Math.sqrt(num);i++)
    {
        if(num%2===0)
        {
            return false
        }

    }
    return true
}
console.log(isPrime(2))


function prime(num)
{
if (num<=1) return false
for(let i=2; i<Math.sqrt(num);i++)
{
if(num%2===0)
    {
    return false
    }

}
return true
}
console.log(isPrime(29))

