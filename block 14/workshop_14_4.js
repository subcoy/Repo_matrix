console.log("---------------------------------------------------------");
for(i=0;i<=100;i++)
    {
        if(i==0)
        {
            //only when is 0
            console.log("number",i,"is FizzBuzz");
        }
        if((i%3==0) && (i%5==0) &&(i!==0))
        {
            console.log("number",i,"is FizzBuzz");
        }
        else if((i%3==0) &&(i!==0))
        {
            console.log("number",i,"is Fizz");
        }
        
        else if((i%5==0) &&(i!==0))
        {
            console.log("number",i,"is Buzz");
        }

    }