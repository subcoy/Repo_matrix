console.log("----------------- CASE 1------------------------------");
let array=[1, 2, 3];
let rev_array=[];
console.log("Original Array=",array);
j=array.length-1;
for(i=0;i<array.length;i++)
{
     if(j>=0)
         {
            rev_array[j]=array[i]
            j=j-1

         }     
}
console.log("The reverse array=", rev_array);

console.log("---------------------------------------------------------");
console.log("----------------- CASE 2------------------------------");
let array1=[1, 3, 5, 7, 9, 11];
let rev_array1=[];
console.log("Original Array=",array1);
j=array1.length-1;
for(i=0;i<array1.length;i++)
{
     if(j>=0)
         {
            rev_array1[j]=array1[i]
            j=j-1

         }     
}
console.log("The reverse array=", rev_array1);
console.log("---------------------------------------------------------");

console.log("----------------- CASE 3------------------------------");
let array2=[20, 50, 30, 60, 200];
let rev_array2=[];
console.log("Original Array=",array2);
j=array2.length-1;
for(i=0;i<array2.length;i++)
{
     if(j>=0)
         {
            rev_array2[j]=array2[i]
            j=j-1

         }     
}
console.log("The reverse array=", rev_array2);

console.log("---------------------------------------------------------");
console.log("----------------- CASE 4------------------------------");
let array3=[1, -1, 2, -3, 5, -8, 13];
let rev_array3=[];
console.log("Original Array=",array3);
j=array3.length-1;
for(i=0;i<array3.length;i++)
{
     if(j>=0)
         {
            rev_array3[j]=array3[i]
            j=j-1

         }     
}
console.log("The reverse array=",rev_array3);

console.log("---------------------------------------------------------");