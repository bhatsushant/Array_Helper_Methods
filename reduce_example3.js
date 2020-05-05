// Program to find whether paranthesis are balanced

function balancedParens(string) {
    return !string.split("").reduce(function(previous,char) {
        if(previous < 0) { return previous}
        if(char === "(") { return ++previous; }
        if(char === ")") { return --previous; }
        return previous;
    },0);
}

balancedParens("))))(((())))");