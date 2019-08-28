//1.program to compute the sum of two integer numbers.if the values are the same return triple of their sum

function sum(number1,number2)
{
    return (number1===number2)? (number1 + number2)*3 : number1 + number2;

}


// 2.Write a JavaScript program to check two given numbers and return true if one of the number is 50 or If their sum is 50. 
function checkNumber(number1,number2)
{
   
   return(number1===50 || number2===50 || (number1+number2)===50)? true : false;

}

//3.Write a JavaScript program to create a new string adding "py" in front of a given string. If the given string begins With "py" then return the onginal string
function checkStr(str)
{
    
   return(string[0]==="p" && string[1]==="y")? string : "py" + string;
 

 }


 //4.Write a JavaScript program accept a string and number. then remove a character at the specified position of a given string and return the new string


 function removeChar(str,index)
 {
       newStr= "";
    for(let i=0;i< str.length;i++)
    {
       if(index===i)
       {
        newStr +=""
       }
       else
         newStr +=str[i];
    
    }
    return newStr;
  
  }


  //5.Write a JavaScript program check if a given positive number is a multiple of 3 or a multiple of 7

  function checkMultiple(number)
  {
       return(number%3===0 || number%7===0)? true : false;
   }
 












