// another routine, this time with a promise
const someRtnWithAPromise = var1 => {
    return new Promise((resolve, reject) => {
        if (var1 === 'err') {
            // Reject the Promise with an error
            reject('some error');
        } else {
            // Resolve (or fulfill) the Promise with data
            let data = {
                val1: 'was',
                val2: 'successful'
            };
            resolve(data);
        }
    });
};

const anotherRtnWithAPromise = var1 => {
    return new Promise((resolve, reject) => {
    if (var1 === 'err') {
    // Reject the Promise with an error
    reject('yet another error');
    } else {
    // Resolve (or fulfill) the Promise with data
    let data = { val1: 'was', val2: 'more', val3: 'successful' };
    resolve(data);
    }
    });
};

export {someRtnWithAPromise, anotherRtnWithAPromise};