const array1=[2, 4, 6, 8, 11, 20, 15, 22];
const array2=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array3 =[70, 42, 55, 81, 21, 91, 34];
const array4= [2, 4, 6, 8, 10, 11, 12];
const m1 =[];
const m2 =[];
const m3 =[];
const m4 =[];
console.log("-------------------------CASE 1-----------------------------");
let y=0;
for(let i=0; i<array1.length; i++)
{
    if (array1[i] % 2 !==0 )
    {
        m1[y]=array1[i];
        y++;
    }
    
}
console.log("Original array 1=", array1)
console.log('new array 1=',m1);
console.log("-----------------------------------------------------------");
console.log("-------------------------CASE 2-----------------------------");
y=0;

for(let i=0; i<array2.length; i++)
{

    if (array2[i] % 2 !==0 )
    {
        m2[y]=array2[i];
        y++;
    }
    
}console.log("Original array2=", array2)
console.log('new array 2=',m2);
console.log("-----------------------------------------------------------");
console.log("-------------------------CASE 3-----------------------------");
y=0;

for(let i=0; i<array3.length; i++)
{

    if (array3[i] % 2 !==0 )
    {
        m3[y]=array3[i];
        y++;
    }
}
console.log("Original array 3=", array1)
console.log('new array3=',m3);
console.log("-----------------------------------------------------------");
console.log("-------------------------CASE 4-----------------------------");
y=0;

for(let i=0; i<array4.length; i++)
{
    if (array4[i] % 2 !==0 )
    {

        m4[y]=array4[i];
        y++;
    }
}
console.log("Original array4=", array1)
console.log('new array 4=',m4);