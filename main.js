
for (let i = 1; i <= 100; i++) {
    // qui prendo i sottomultipli di 5 e 3
    if (i % 5 === 0 && i % 3 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        // qui prendo i sottomultipli di 3
        console.log("Fizz");
    } else if (i % 5 == 0){
         // qui prendo i sottomultipli di 5
        console.log("Buzz");
    } else
    console.log(i);
        
}
        
