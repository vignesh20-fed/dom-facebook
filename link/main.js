let form = document.querySelector('#function');
form.addEventListener('submit',function(e){
	e.preventDefault()
	let lmail = document.querySelector('#MAIL').value;
	let lpass = document.querySelector('#PASSWORD').value;
	let result = document.querySelector('#result');
    if(lmail ==="" ){
		result.innerHTML="Please Enter Your Mail Or Phone number";
		result.style.color="red";
	}
	else if(lpass === ""){
		result.innerHTML="Please Enter Your Password";
		result.style.color="red";	
	}



	let gMail =	localStorage.getItem("Email");
	let gPass  =  localStorage.getItem("Psw");
	
	if(lmail == gMail && lpass == gPass){
		alert("successfull");
		location.href="input.html";
	}
    else{
		alert("Incorrect");
	}
});

