// This is our main function
function fizzbuzz(): void {
    for (let i = 1; i <= 100; i++) {
        let message:string = "";
        let special:boolean = false;
    
        if (i % 3 == 0) {
            special = true;
            if (i % 5 == 0) {
                message = "FizzBuzz";
            } else {
                message = "Fizz";
            }
        } else if (i % 5 == 0) {
            special = true;
            message = "Buzz";
        }

        if (i % 7 == 0) {
            special = true;
            message = message.concat("Bang");
        }

        if (i % 11 == 0) {
            special = true;
            message = "Bong";
        }

        if (!special) {
            console.log(i);
        } else {
            console.log(message);
        }
    }
}
// Now, we run the main function:
fizzbuzz();