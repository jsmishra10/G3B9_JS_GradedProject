window.history.forward();
function noback() {
    window.history.forward();
}

sessionStorage.setItem('credentials', JSON.stringify({name:["Jai", "Naresh"], passcode:["123", "456"]}))
var result = sessionStorage.getItem('credentials')
console.log(result)

const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', validateLoginForm);




function validateLoginForm(event) {
    event.preventDefault();

    const username = document.getElementById('uname').value;
    const password = document.getElementById('psw').value;
    console.log(username);
    console.log(password);

    var cred = JSON.parse(result);
    cred.name.map((item, ind)=>{
        console.log(item)        
        console.log(cred.passcode[ind])
        if(username === item && password === cred.passcode[ind]){
            location.href="resume.html"
        }
        else{
            document.getElementById("error").innerHTML = "Invalid username/password"
        }
    })
}


    

           

 