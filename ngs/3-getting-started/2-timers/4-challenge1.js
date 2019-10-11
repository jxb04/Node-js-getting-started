const theOneFunc = delay => {
    console.log('Hello after ' + delay + ' seconds');
};

var timer = 4;

// Hello after 4 seconds
setTimeout(theOneFunc, timer * 1000, timer);

// Hello after 8 seconds
timer = timer + 4;
setTimeout(theOneFunc, timer * 1000, timer);

// You can define only ONE function
