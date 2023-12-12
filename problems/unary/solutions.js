/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

//const MESSAGE = readline();


const unary = (stringBinary) => {
    let tmp = '';
    let change = stringBinary[0];    
    let counBina = '';    
    stringBinary.split("").forEach((binar,idx) => {

        if (binar !== change)
        {
            tmp += change === '1' ? '0 ': '00 ';
            tmp += counBina+' ';            
            counBina = '';
            change = binar;
        }
        counBina += '0';

        //it is the last one
        if (idx == stringBinary.length - 1)
        {
            tmp += change === '1' ? '0 ': '00 ';
            tmp += counBina;
        }        
    });

    return tmp;
}

const main = (message) => {
    let totalBinary = ''
    message.split('').forEach((letter) => {
        const codePoint = letter.charCodeAt(0);
        let binary = codePoint.toString(2);    
        binary = binary.padStart(7,'0');    
        totalBinary += binary;
    });    

    return unary(totalBinary);
}


let testCases = [
    {
        args : "C",
        expected: "0 0 00 0000 0 00"
    },
    {
        args : "CC",
        expected: "0 0 00 0000 0 000 00 0000 0 00"
    },    
    {
        args : "%",
        expected: "00 0 0 0 00 00 0 0 00 0 0 0"
    },    
    {
        args : "Chuck Norris' keyboard has 2 keys: 0 and white space.",
        expected: "0 0 00 0000 0 0000 00 0 0 0 00 000 0 000 00 0 0 0 00 0 0 000 00 000 0 0000 00 0 0 0 00 0 0 00 00 0 0 0 00 00000 0 0 00 00 0 000 00 0 0 00 00 0 0 0000000 00 00 0 0 00 0 0 000 00 00 0 0 00 0 0 00 00 0 0 0 00 00 0 0000 00 00 0 00 00 0 0 0 00 00 0 000 00 0 0 0 00 00000 0 00 00 0 0 0 00 0 0 0000 00 00 0 0 00 0 0 00000 00 00 0 000 00 000 0 0 00 0 0 00 00 0 0 000000 00 0000 0 0000 00 00 0 0 00 0 0 00 00 00 0 0 00 000 0 0 00 00000 0 00 00 0 0 0 00 000 0 00 00 0000 0 0000 00 00 0 00 00 0 0 0 00 000000 0 00 00 00 0 0 00 00 0 0 00 00000 0 00 00 0 0 0 00 0 0 0000 00 00 0 0 00 0 0 00000 00 00 0 0000 00 00 0 00 00 0 0 000 00 0 0 0 00 00 0 0 00 000000 0 00 00 00000 0 0 00 00000 0 00 00 0000 0 000 00 0 0 000 00 0 0 00 00 00 0 0 00 000 0 0 00 00000 0 000 00 0 0 00000 00 0 0 0 00 000 0 00 00 0 0 0 00 00 0 0000 00 0 0 0 00 00 0 00 00 00 0 0 00 0 0 0 00 0 0 0 00 00000 0 000 00 00 0 00000 00 0000 0 00 00 0000 0 000 00 000 0 0000 00 00 0 0 00 0 0 0 00 0 0 0 00 0 0 000 00 0"
    }
]

testCases.forEach((testCas,idx) => {

    let result = main(testCas.args);    
    console.log(`Test case ${idx} with ${testCas.args}`, testCas.expected === result );
})


