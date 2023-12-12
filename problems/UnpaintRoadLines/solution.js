

const evaluateRangeInLogOrder = (logPaintedOrdered, start, end) =>
{
    let stillEvaluate = true;

    //console.log(logPaintedOrdered);
    let idx = 0;
    while(stillEvaluate)
    {
        //if start and end is less that first el of LogPaintedOrdered just insert and finist.        
        //console.log('idx:',idx);
        //console.log(logPaintedOrdered);
        let elementToEvalue = logPaintedOrdered[idx];
        
        if (!elementToEvalue)
        {
          logPaintedOrdered.push({start: start, end: end});
          stillEvaluate = false;
          continue;
        }        

        //it is in the start
        if ( end < elementToEvalue.start)
        {
          logPaintedOrdered.splice(idx,0,{ start: start, end: end});
          stillEvaluate = false;
          continue;
        }        

        //Overlapping case 1
        if (end >= elementToEvalue.start && end <= elementToEvalue.end )
        {
          logPaintedOrdered.splice(idx,1,{start: Math.min(elementToEvalue.start, start), end: elementToEvalue.end });
          stillEvaluate = false;
          continue;
        }

        //Overlapping case 2 it is in the end.
        if (start <= elementToEvalue.end )
        {
          start = Math.min(elementToEvalue.start, start);

          if(idx < logPaintedOrdered.length -1)
          {            
            logPaintedOrdered.splice(idx,1);
          }
          else
          {
            //update that element
            logPaintedOrdered.splice(idx,1,{start: Math.min(elementToEvalue.start, start), end: end });
            stillEvaluate = true;
          }          
          continue;
        }        

        //we need to evaluate the next element
        if (start > elementToEvalue.end)
        {
            idx++;
        }
    }        
}

const printLogPainted = (logPainted) => 
{
    return logPainted.map((el) => [el.start, el.end]).flat();
}

//Main function will return the correct range 
const getPaintRanges = (logPainted) => {
  //console.log('Testing this ',logPainted);

  if (logPainted.length <= 2)
    return logPainted;

  
  let logPaintedOrdered = [{ start: logPainted[0], end: logPainted[1] }];

  for (let i= 2; i < logPainted.length; i += 2 )
  {
      evaluateRangeInLogOrder(logPaintedOrdered,logPainted[i],logPainted[i+1]);
  }

  return printLogPainted(logPaintedOrdered);
}


let testCases = [
  [4,10,1,3],
  [4,10,1,5],
  [4,10,5,8],
  [4,10,5,12],
  [4,10,2,12],
  [4,10,12,14,5,13],
  [4,10,5,13]
]

testCases.forEach( (el) =>
  {
    console.log(`result of this testCase ${el} is `,getPaintRanges(el));    
  }
)
