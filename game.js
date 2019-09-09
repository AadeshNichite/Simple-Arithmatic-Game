const type=['+','-','*','/'
 ];
let a,b,c,d;
a=Math.floor(Math.random() * 20);
document.getElementById("text1").innerHTML=a;
b=Math.floor(Math.random() * 20);
document.getElementById("text2").innerHTML=b;

var rand = type[Math.floor(Math.random() * type.length)];
document.getElementById("operation").innerHTML=rand;

function process(){
            var selectedValue=document.getElementById("result").value;
        if(rand=='+'){
            c=a+b;
            console.log(c);
            console.log("Addition");
            if(c==selectedValue)
            {
                console.log("success");

                document.getElementById("SuccessResult").innerHTML="success"+" "+"👍";      
                  }
            else{
                document.getElementById("MainResult").innerHTML="Right Answer is"+" "+c;
                document.getElementById("SuccessResult").innerHTML="Sorry..Failed"+""+"👎"; 

            }
        }
        else if(rand=='*')
        {
            c=a*b;
            console.log("Multiplication");
            console.log(c);
            if(c==selectedValue)
            {
                console.log("success");
                document.getElementById("SuccessResult").innerHTML="success"+" "+"👍";    
            }
            else{
                document.getElementById("MainResult").innerHTML="Right Answer is"+" "+c;
                document.getElementById("SuccessResult").innerHTML="Sorry..Failed"+""+"👎"; 
            }

        }
        else if(rand=='/')
        {
            c=Math.floor(a/b);
            console.log(c);
            console.log("div");
            if(c==selectedValue)
            {
                console.log("success");
                document.getElementById("SuccessResult").innerHTML="success"+" "+"👍";    
            }
            else{
                document.getElementById("MainResult").innerHTML="Right Answer is"+" "+c;
                document.getElementById("SuccessResult").innerHTML="Sorry..Failed"+""+"👎"; 
            }

        }
        else 
        {
            c=a-b;
            console.log(c);
            console.log("sub");
            if(c==selectedValue)
            {
                console.log("success");
                document.getElementById("SuccessResult").innerHTML="success"+" "+"👍";    
            }
            else{
                document.getElementById("MainResult").innerHTML="Right Answer is"+" "+c;
                document.getElementById("SuccessResult").innerHTML="Sorry..Failed"+""+"👎"; 
            }
        }

}
