function validateForm() {
	var str="";
  let x = document.forms["signup"]["fname"].value;
   var flag=true;
	  var letterNumber = /^[a-zA-Z]+$/;
	  if((x.match(letterNumber)&& x.charAt(0) === x.charAt(0).toUpperCase())
	  {
		 
		flag=true;
		str+="<br>First name is right";
	  }
	  else
	  {
		  str+="<br>First name is wrong";
		  flag=false;
	  }
   let x1 = document.forms["signup"]["lname"].value;
   
	  var letterNumber1 = /^[a-zA-Z]+$/;
	  if((x1.match(letterNumber1)&& x.charAt(0) === x1.charAt(0).toUpperCase())
	  {
		 
		flag=true;
		str+="<br>Last name is right";
	  }
	  else
	  {
		  str+="<br>Last name is wrong";
		  flag=false;
	  }
let x2 = document.forms["signup"]["password"].value;
let x3 = document.forms["signup"]["rpassword"].value;
flag1=false;
flag2=false;
	if(x2==x3)
	{
		if(x2.length>=6)
		{
				var i=0;
				var character='';
					while (i <= x2.length){
						character = x2.charAt(i);
						if (!isNaN(character * 1)){
						flag1=true;
							}	 
					if (character == character.toUpperCase()) {
						flag2=true;
					}
         
     
				i++;
				}
		}
		else
		{
			flag=false;
		}
	}
	else{
		flag=false;
	}
if(flag1==false || flag2==false)
{
	str+="<br>Password and retype password is wrong";
	flag=false;
}
else
{
	str+="<br>Password and retype password is right";
}

document.getElementById("side").innerHTML=str;
return(flag);
}
  
