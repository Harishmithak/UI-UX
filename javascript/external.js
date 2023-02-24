function perfect(n) {
    var temp = 0;
    for (var i = 0; i <= n ;i++) {
        if (n % i === 0) {
            temp += i;
        }
    }

    if (temp === n || temp !== 0) {
        document.write("It is a perfect number.");
    }
    else {
       document.write("It is not a perfect number.");
    }
}
function factorial(n)
{
var n;
fact=1;

}

    function fibonacci(num)
    {
    var n1=-1,n2=1,n3,i=1;
    document.write("fibonacci series :");
   
    while(i<=num)
    {
        
        n3=n1+n2;
        document.write(n3);
    
        n1=n2;
        n2=n3;
        i++;
    }
 
    }
    function factorial(num)
    {
    var fact=1;
    var i=1;
    do{
        fact=fact*i;
        i++;
    }while(i<=num);
    document.write(fact);
    }
function con1()
{
    var gender;
    gender=prompt("enter the gender:");
    if(gender=='m'||gender=='M'){
        document.write("the person is male");
    }
    else if(gender=='f'||gender=='F')
    {
        document.write("the person is female");
    }
    else{
document.write("others")
    }
    
}
function con2()
{
    var gender;
    gender=prompt("enter the gender:");
    switch(gender)
    {
        case 'm':
            
        document.write("the person is male");
        break;

        case 'f':
            
            document.write("the person is female");
            break;
            
        case 'M':
           
            document.write("the person is male");
            break;
    
            case 'F':
                
                document.write("the person is female");
                break;
            default:
                document.write("others");

    }
    

}


function registration()
    {

        var pname= document.myform.getElementById("t1").value;
    
        var email= document.myform.getElementById("t2").value;
        var uname= document.myform.getElementById("t3").value;
        var pwd= document.myform.getElementById("t4").value;        
       
        
        //email id expression code
        var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
        var letters = /^[A-Za-z]+$/;
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if(pname=='')
        {
            alert('Please enter your name');
        }
        else if(!letters.test(pname))
        {
            alert('Name field required only alphabet characters');
        }
        else if(email=='')
        {
            alert('Please enter your user email id');
        }
        else if (!filter.test(email))
        {
            alert('Invalid email');
        }
        else if(uname=='')
        {
            alert('Please enter the user name.');
        }
        else if(!letters.test(uname))
        {
            alert('User name field required only alphabet characters');
        }
        else if(pwd=='')
        {
            alert('Please enter Password');
        }
       
        else if(document.getElementById("t5").value.length > 12)
        {
            alert ('Password max length is 12');
        }
        else
        {                                           
               alert('Thank You for Registration & You are Redirecting to Website');
               // Redirecting to other page or webste code. 
               window.location = "https://tutorial.eyehunts.com//"; 
        }
    }
 
  