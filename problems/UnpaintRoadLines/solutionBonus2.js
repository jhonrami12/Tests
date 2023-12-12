/*
var Mocha = require('mocha')
var assert = require('assert')
var mocha = new Mocha()

mocha.suite.emit('pre-require', this, 'solution', mocha)
*/

const evaluateRangeInLogOrder = (logPaintedOrdered, start, end) =>
{
    //console.log('called evaluateRangeInLogOrder');
    let stillEvaluate = true;

    //console.log(logPaintedOrdered);
    let idx = 0;
    while(stillEvaluate)
    {
        //if start and end is less that first el of LogPaintedOrdered just insert and finist.
        //console.log('idx:',idx, 'start:',start,'end', end);
        //console.log('init:',logPaintedOrdered);
        let elementToEvalue = logPaintedOrdered[idx];
        
        if (!elementToEvalue)
        {
          logPaintedOrdered.push({start: start, end: end, strong: 1});
          stillEvaluate = false;
          continue;
        }

        //it is in the start
        if ( end < elementToEvalue.start)
        {
          logPaintedOrdered.splice(idx,0,{ start: start, end: end, strong: 1});
          stillEvaluate = false;
          continue;
        }

        //Overlapping case 1
        if (
          (end >= elementToEvalue.start && end <= elementToEvalue.end) ||
          start <= elementToEvalue.end )
        {
          let minStart = Math.min(elementToEvalue.start, start);
          let maxStart = Math.max(elementToEvalue.start, start);
          let minEnd = Math.min(elementToEvalue.end, end);
          let maxEnd = Math.max(elementToEvalue.end, end);

          if (minStart != maxStart)
          {
            logPaintedOrdered.splice(idx++,0,{start: minStart, end: maxStart, strong:1 });
          }
          logPaintedOrdered.splice(idx++,1,{start: maxStart, end: minEnd,strong:elementToEvalue.strong+1 });
          
          //console.log(idx);
          //console.log(logPaintedOrdered[idx+2]);
          if (end > elementToEvalue.end && !logPaintedOrdered[idx+2]) 
          {
            console.log('NO Insert here')
            start = minEnd;
            continue;
          }
          else if (end != elementToEvalue.end)
          {            
            console.log('yes Insert here')
            logPaintedOrdered.splice(idx,0,{start: minEnd, end: maxEnd, strong:1 });            
          }          
          stillEvaluate = false;
          continue;
        }           

        //we need to evaluate the next element
        if (start > elementToEvalue.end)
            idx++;
    }        
    //console.log('final:',logPaintedOrdered);
}

const printLogPainted = (logPainted) => 
{
    return logPainted.map((el) => [el.strong, el.start, el.end]).flat();
}

//Main function will return the correct range 
const getPaintRanges = (logPainted) => {
  //console.log('Testing this ',logPainted);

  if (logPainted.length <= 2)
    return logPainted;

  
  let logPaintedOrdered = [{ start: logPainted[0], end: logPainted[1], strong: 1 }];

  for (let i= 2; i < logPainted.length; i += 2 )
  {
      evaluateRangeInLogOrder(logPaintedOrdered,logPainted[i],logPainted[i+1]);
  }

  return printLogPainted(logPaintedOrdered);
}




let testCases = [  
    { args: [4,10,1,3],
      descrp: 'NO Overlapping',
      expected: [1,1,3,1,4,10]
    },
    { args: [4,10,1,5],
      descrp: 'Overlapping per left',
      expected: [1,1,4,2,4,5,1,5,10]
    },
    { args: [4.4,10,5,8],
      descrp: 'Overlapping inside',
      expected: [1,4.4,5,2,5,8,1,8,10]
    },
    { args: [4,10,5,12],
      descrp: 'Overlapping by right',
      expected: [1,4,5,2,5,10,1,10,12]
    },
    { args: [4,10,2,12],
      descrp: 'Overlapping outside',
      expected: [1,2,4,2,4,10,1,10,12]
    },
    { args: [4,10,12,14,5,13],
      descrp: 'Overlapping two separates',
      expected: [1,4,5,2,5,10,1,10,12,2,12,13,1,13,14]
    },
    { args: [3, 10, 14, 20, 1, 5],
      descrp: 'Overlapping by left',
      expected: [1, 1, 3, 2, 3, 5,1,5,10,1,14,20]
    },
    { args: [1, 7, 1, 7, 1, 11, 1, 7, 1, 7],
      descrp: 'Overlapping by left',
      expected: [5, 1, 7, 1, 7, 11]
    },
  ]  

  testCases.forEach( (el,idx) =>
    {
      console.log(`Test case ${idx} result of this testCase ${el.args} when ${el.descrp} `);
      let result = getPaintRanges(el.args).toString();
      let expected = el.expected.toString();
      console.log('-----result',result,'expected',expected, result === expected);
    }
  );
