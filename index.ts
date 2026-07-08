// This is our main function
function fizzbuzz(): void {
    for (let i = 1; i <= 100; i++) {
        const messageList:string[] = [];
    
        if (i % 3 == 0) {
            messageList.push("Fizz");
        }
        
        if (i % 5 == 0) {
            messageList.push("Buzz");
        }

        if (i % 7 == 0) {
            messageList.push("Bang");
        }

        if (i % 11 == 0) {
            messageList.length = 0;
            messageList.push("Bong");
        }

        if (i % 13 == 0) {
            const index:number = messageList.findIndex(message => message[0] == 'B');
            if (index == -1)
                messageList.push("Fezz");
            else
                messageList.splice(index, 0, "Fezz");
        }

        if (!messageList.length) {
            console.log(i);
        } else {
            console.log(messageList.join(""));
        }
    }
}
// Now, we run the main function:
fizzbuzz();