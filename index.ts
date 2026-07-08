import process from 'node:process';
import * as readline from 'node:readline'

function fizzbuzz(max:number, rules: number[]): void {

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

const rl1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const rl2 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

function fizzbuzzread(): void {
    let max:number = 0;
    rl1.question('Enter max number: ', (maxNumber:string) => {
        const max:number = Number(maxNumber);
        rl2.question('Choose rules to apply (out of 3, 5, 13): ', (input: string) => {
            const r: string[] = input.split("//s+");
            const rules: number[] = [];

            for (let i = 0; i < r.length; i++) {
                rules.push(Number(r.at(i)));
            }

            fizzbuzz(max, rules);

            rl2.close();
        });
        rl1.close();   
    });
}


fizzbuzzread();