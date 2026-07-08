import process from 'node:process';
import * as readline from 'node:readline'

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

function fizzbuzz(max:number): void {

    for (let i = 1; i <= max; i++) {
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

        if (i % 17 == 0) {
            messageList.reverse();
        }

        if (!messageList.length) {
            console.log(i);
        } else {
            console.log(messageList.join(""));
        }
    }
}

function fizzbuzzread(): void {
    let max:number = 0;
    rl.question('Enter max number: ', (maxNumber:string) => 
        {
        const max:number = Number(maxNumber);
        fizzbuzz(max);
        rl.close();   
        });
}
// Now, we run the main function:
fizzbuzzread();