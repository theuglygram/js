function toogleSubmit(){
  
let fullName = document.querySelector("#fullName").value;
let email = document.querySelector("#email").value;
let password = document.querySelector("#password").value;
let conf_password = document.querySelector("#conf_password").value;
//let nametxt = document.querySelector(".nametxt");


let error = {
    fullName : null,
    email : null,
    password : null,
    conf_password : null
};
//error name
if(fullName.length === 0){
    error.fullName = "Input full Name";
} 
else {
        error.fullName =  null;
    }
 
 nametxt.innerHTML = error.fullName;



 
 //error email

    if(email.length === 0) {
     error.email = "Input email Address";
    }
    else {
        error.email = null;
    }
 
        emailtxt.innerHTML = error.email;


    // error password

    if (password.length < 8){
        error.password = "Password must be more than eight";
    } else{
        error.password =  null;
    }
    passtxt.innerHTML  =  error.password;

    if(password !=  conf_password){
        error.conf_password = "Passwords Does not Match"
    }
        else{
            error.conf_password = null;
        }
        conf_txt.innerHTML = error.conf_password;
        

        
     }