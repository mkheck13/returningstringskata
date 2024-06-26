// Make a function that will return a greeting statement that uses an input; your program should return,
// "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]


// a simple one. Just need to return the greeting in double quotes around the hello and the rest of the greeting and use + to add the name into it.
function greet(name){
    return "Hello, " + name + " how are you doing today?"
}

// could also do this which looks cleaner

function greet(name){
    return `Hello, ${name} how are you doing today?`;
}

// this one was interesting

function greet(name){
    return "Hello, <name> how are you doing today?".replace("<name>", name);
}