let value1="impresionante1 "; // string to be tested
vowelscounter=0;
consonantcounter=0;
numbercounter=0;
symbolcounter=0;
spacecounter=0;

console.log("Quantity caracteres",value1.length);

console.log("---------------------------------------------------------");
for( i=0; i<value1.length;i++)  
    {
        let checknumber=0;
        let checkletter=0;

        // check if the value is a number
        for(z=0; z<=9; z++)
        {
           if((value1[i]==z) && (value1[i]!==" "))
           {
            numbercounter++
            checknumber=1
           }

        }
 
        // check if the value is letter
        if ((value1[i]>= 'a') && (value1[i] <= 'z') || (value1[i]>= 'A') && (value1[i] <= 'Z'))
        {
            checkletter=1; //counter vowels
            if ((value1[i]==="a") ||(value1[i]==="e") || (value1[i]==="i") ||(value1[i]==="o") || (value1[i]==="O") ||(value1[i]==="u")  ||(value1[i]==="U") )
            {
              vowelscounter++        
            }

            else
            { 
                consonantcounter++  // counter consonant
            }         
        }
        // check if the value is symbol
        if((checkletter==0) && (checknumber==0) && (value1[i]!==" "))
        {
            symbolcounter++         //counter symbols
        }
        // check if the value is empty
        if(value1[i]===" ")
        {
            spacecounter++
        }
             
    }
console.log("Total characters=", value1.length);
console.log("The string [",value1,"]  has",consonantcounter,"consonants and",vowelscounter,"vowels ");
if(numbercounter>0)
{
    console.log("The string has", numbercounter, "numbers");
}
if(symbolcounter>0)
{
    console.log("The string has", symbolcounter, "symbols");
}
if(spacecounter>0)
{
    console.log("The string has", spacecounter, "empty space");
}
