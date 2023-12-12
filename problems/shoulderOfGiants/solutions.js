/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

let nodes = {}


const findDeeperLeaves = (node) => {
    
    let maxDeep = 0;
    node.forEach((successor) => {                
        if (nodes[successor])
            maxDeep = Math.max(maxDeep, findDeeperLeaves(nodes[successor])+1);
        else        
            maxDeep = Math.max(maxDeep, 1);
    }); 

    return maxDeep;
}

const buildStructure = (n, arrRelations) => {
    for (let i = 0; i < n; i++) {
        let inputs = arrRelations[i]
        const x = parseInt(inputs[0]); // a relationship of influence between two people (x influences y)
        const y = parseInt(inputs[1]);
        
        if (nodes[x])
            nodes[x].push(y);
        else
            nodes[x] = [y];
    }
}

const main = (n,arrRelations) => {
    nodes = {};

    let maxDeep = 0;

    buildStructure(n,arrRelations);
    // Write an answer using console.log()
    // To debug: console.error('Debug messages...');
    for(let keyNode in nodes)
        maxDeep = Math.max(findDeeperLeaves(nodes[keyNode])+1,maxDeep)

    return maxDeep;
}


let testCases = [
    {
        args: { n: 3, arrRelat: [[1,2], [1,3],[3,4]] },
        expected: 3
    },
    {
        args: { n: 8, arrRelat: [[1,2], [1,3],[3,4],[2,4],[2,5],[10,11],[10,1],[10,3]] },
        expected: 4
    },
    {
        args: { n: 4, arrRelat: [[2,3],[8,9],[1,2],[6,3]] },
        expected: 3
    },
]

testCases.forEach( (tCase,idx) => {

    let result = main(tCase.args.n, tCase.args.arrRelat)    
    console.log(`Test Case ${idx} result: ${result === tCase.expected}`);
});

// The number of people involved in the longest succession of influences
//console.log(maxDeep);
