let form = document.querySelector('#inputcontent');
form.addEventListener('submit', storeData);
function storeData(e){
	e.preventDefault();
	console.log("click");
	let name = document.getElementById('NAME').value;
	let  lname = document.getElementById('LNAME').value;
	let  mail = document.getElementById('MAIL').value;
	let pass=document.getElementById('PASS').value;
	let  date = document.getElementById('dob').value;
	let  gender = document.querySelector('#gen1').value;
	let result = document.querySelector('#result');
    if(name === "" ){
		result.innerHTML="Please Enter Your Name";
		result.style.color="red";
	}
	else if(lname === ""){
		result.innerHTML="Please Enter Your Lastname";
		result.style.color="red";	
	}
	else if(mail===""){
			result.innerHTML="Please Enter Your Mail Or Phone number";
		    result.style.color="red";
	}
	else if(date === ""){
			result.innerHTML="Please Enter Your Date";
		    result.style.color="red";
	}
	else if(gender === ""){
			result.innerHTML="Please Enter Your gender";
		    result.style.color="red";
	}
	else if(pass===""){
		result.innerHTML="Please Enter Your Correct Password";
		result.style.color="red";
	}
	else{
		result.innerHTML="Sign Up Sucessfull..........";
		result.style.color="red;";
	}
	
	
	localStorage.setItem("Email",mail);
	localStorage.setItem("Psw",pass);
}; 

