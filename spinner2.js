const turn = ['|', '/', '-', '\\','|', '/', '-', '\\'];
for(let i = 0; i < turn.length; i++) {
    if (i === turn.length - 1) {
        setTimeout(() => {
            process.stdout.write(`\r${turn[i]} \n`)    
        }, 300 + (i * 200));
    }
    else {
        setTimeout(() => {
            process.stdout.write(`\r${turn[i]}  `);
        }, 300 + (i * 200));
    }
};