// const email = document.getElementById("mail");

// email.addEventListener("input", function(e) {
//     if (email.validity.typeMismatch) {
//         email.setCustomValidity("email must be filled!!!");
//         email.reportValidity();
//     } else {
//         email.setCustomValidity("");
//     }
// })

const form = document.getElementById("form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const pw = document.getElementById("password");
const pw2 = document.getElementById("passwordTwo");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInput();
});

function checkInput() {
    // get input values;

    const usernameValue = userName.value.trim();
    const emailValue = email.value.trim();
    const pwValue = pw.value.trim();
    const pw2Value = pw2.value.trim();


    if (usernameValue === "") {
        //show error
        //add error class

        setErrorFor(userName, "username can not be blank");
    } else {
        //add sucess class
        setSucessFor(userName);
    }

    if (emailValue === "") {
        //show error
        //add error class

        setErrorFor(email, "email must be filled!!!");
    } else if (!isEmail(emailValue)){
        //add sucess class
        setErrorFor(email,  "not a valid email");
    } else {
        setSucessFor(email);
    }

    if(pwValue === '') {
		setErrorFor(pw, 'Password cannot be blank');
	} else {
        setSucessFor(pw);
	}


	if(pw2Value === '') {
		setErrorFor(pw2, 'Password2 cannot be blank');
	} else if(pwValue !== pw2Value) {
		setErrorFor(pw2, 'Passwords does not match');
	} else{
		setSucessFor(pw2);
	}
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    //add error message insdie small
    small.innerText = message;

    //add error class
    formControl.className = "form-control error"
}


function setSucessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control sucess"
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}