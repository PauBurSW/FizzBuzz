import process from 'node:process';
import * as readline from 'node:readline'

function fizzbuzz(max:number, rules: number[]): void {

    for (let i = 1; i <= max; i++) {
        const messageList:string[] = [];
    
        if ((rules.length == 0 || rules.includes(3)) && (i % 3 == 0)) {
            messageList.push("Fizz");
        }
        
        if ((rules.length == 0 || rules.includes(5)) && (i % 5 == 0)) {
            messageList.push("Buzz");
        }

        if (i % 7 == 0) {
            messageList.push("Bang");
        }

        if (i % 11 == 0) {
            messageList.length = 0;
            messageList.push("Bong");
        }

        if ((rules.length == 0 || rules.includes(13)) && (i % 13 == 0)) {
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

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

function askQuestion(input: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(input, (answer: string) => {
            resolve(answer.trim());
        });
    });
}

async function fizzbuzzread() {
    try {
        const maxNumber: string = await askQuestion("Enter max number: ");
        const r : string[] = (await askQuestion("Choose rules to apply (out of 3, 5, 13): ")).split(/[,; ]+/);

        const max:number = Number(maxNumber);
        const rules: number[] = [];

        for (let i = 0; i < r.length; i++) {
            rules.push(Number(r.at(i)));
        }

        fizzbuzz(max, rules);
    } catch (err) {
        console.log("Error reading input: ", err);
    } finally {
        rl.close();
    }
}


fizzbuzzread();