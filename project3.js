const form =document.getElementById("form");
const username =document.getElementById("username");
const email =document.getElementById("email");
const password =document.getElementById("password");
const password2 =document.getElementById("password2");

//Show input error messages
function showError(input,message)
{
    const formControl=input.parentElement;  //getting the parent element of the selected input bcoz the error message is absolutely positioned in the parent element but not in the input element.

    formControl.className="form-control error";
    const small=formControl.querySelector("small");
    small.innerText=message;//Remember innerText is a keyword and T should be in capslock
}
//Show input success message
function showSuccess(input)
{
    const formControl=input.parentElement;
    formControl.className="form-control success";
}

function checkEmail(input){
    const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i ;
    
    if(re.test(input.value.trim()))
    {
        showSuccess(input);
    }
    else{
        showError(input,'Email is not valid');
    }
}

//Check the required fields using the arrays and the foreach methods

function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim()==="")
        {
            showError(input,` ${firstUpper(input)} is required`);/*DONT type username,password or stuff like that bcoz typing input and calling them as array is the point of writing this clean code.
           If we see the error message we know that all characters are lowercase and we want the first letter to be the upper case so we will convert the first letter to uppercase with the following function */

        }
        else{
            showSuccess(input);
        }
        
    })
}
//Check input lengths

function checkLength(input,min,max)
{
    if(input.value.length<min)
    {
        showError(input,`${firstUpper(input)} must be at least ${min} characters`);
    }
    else if(input.value.length> max){
        showError(input,`${firstUpper(input)} must be less than  ${max} characters`);
    }
    else{
        showSuccess(input);
    }
}
//Check passwords match each other
function checkPasswordsMatch(input1,input2)
{
    if(input1.value !== input2.value)
    {
        showError(input2,`Passwords are not same `)
    }
    // else{
    //     showSuccess(input1)
    // } You shouldnt write this code bcoz if you give the else statements then the password automatically turns to green colour even if we doesn't enter anything in that fields.
}


//Uppercase

function firstUpper(input)
{
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
//Event listeners

form.addEventListener('submit',function(e)
{
    e.preventDefault();

checkRequired([username,email,password,password2])
checkLength(username,3,15);
checkLength(password,6,25);
checkEmail(email);
checkPasswordsMatch(password,password2);

});

//Its messy to create this kind of validations with if and else statements so rather we use functions to validate them in the upcoming videos and we will just comment out this codes

    // if(username.value==="")
    // {
    //     showError(username,"Username is required");
    // }
    // else{
    //     showSuccess(username);
    // }

    // if(email.value==="")
    // {
    //     showError(email,"Email is required");
    // }
    // else if(!isValidEmail(email.value)){
    //     showError(email,"Email is not valid")
    // }//you should pass the email.value or else it wont work in the program
    // else{
    //     showSuccess(email);
    // }

    // if(password.value==="")
    // {
    //     showError(password,"Password is required");
    // }
    // else{
    //     showSuccess(password);
    // }

    
    // if(password2.value==="")
    // {
    //     showError(password2,"Password should be re-entered");
    // }
    // else{
    //     showSuccess(password2);
    // }
    


