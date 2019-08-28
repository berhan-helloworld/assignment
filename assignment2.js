//1.Write a JavaScript function that accept one number parameter and reverse the number. 
function reverseNumber(number)
{
    let orginalNumber=number;
    temp=0;
    while(number > 0)
{
    remainder =number%10;
        number= parseInt(number/10);
        temp= temp*10 + remainder ;
}
return `The reverse of ${orginalNumber} is ${temp}`;
}



//2.Write a JavaScript function that checks whether a passed stnng is palindrome or not? A palindrome is word, phrase, or sequence that reads the same 

function palindrome(str) 
{

    str = str.toLowerCase();

let strlength = str.length; 
    
for (let i = 0; i < strlength/2; i++) 
{
if (str[i] !== str[strlength - 1 - i]) 
{ 
 return `${str} is not a palindrome`;
}

}
return `${str} is a palindrome`;
}




//3.Write a JavaScript function that generates all combinations of a string.
//i'm still working on this i just copied and paste from the web
//i'll create and upload by myself later.
function combinations(str)
{
var array1 = [];
  for (var x = 0, y=1; x < str1.length; x++,y++) 
  {
   array1[x]=str1.substring(x, y);
    }
var combi = [];
var temp= "";
var slent = Math.pow(2, array1.length);

for (var i = 0; i < slent ; i++)
{
    temp= "";
    for (var j=0;j<array1.length;j++) {
        if ((i & Math.pow(2,j))){ 
            temp += array1[j];
        }
    }
    if (temp !== "")
    {
        combi.push(temp);
    }
}
  return combi.join("\n");
}


//4.Write a JavaScript function that returns passed string with letters in alphabetical order

function sortString(str)
{
    
    let arrayStr = str.toLowerCase().split('');
    let temp;
    for(let i = 0; i < arrayStr.length; i++)
    {
      for(let j = i + 1; j < arrayStr.length; j++){
       
        if(arrayStr[i] > arrayStr[j])
        {
          temp = arrayStr[i];
          arrayStr[i] = arrayStr[j];
          arrayStr[j] = temp;
        }
      }
    }
    return arrayStr.join('');
  }



  //5.Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case

  function capitalizeStr(str) 
{
    str = str.split(" ");

    for (let i = 0;  i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
        
    }

    return str.join(" ");
}
