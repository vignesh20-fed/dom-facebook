let forms=document.getElementById('form');
let input=document.getElementById('input');
let posts=document.getElementById('posts');
forms.addEventListener("submit",function(e){
e.preventDefault();
readPost(); 
});
let data={};
function readPost(){
   data["text"]=input.value;
   console.log(data);
   createPost();
}
function createPost(){
  posts . innerHTML = `<div>
  <h3>Your Post Here</h3>
				<p>${data.text}</p>
				<span class="option"> 
				<img src="reg.jpg" width="200px" height="200px">
				<iconify-icon onclick="edit(this)" icon="bxs:edit"></iconify-icon>
				<iconify-icon onclick="empty(this)" icon="material-symbols:delete-outline"></iconify-icon>
				</span>
				</div>`
   input.value=" ";
}
function edit(e){
      input.value=e.parentElement.previousElementSibling.innerHTML;
	  e.parentElement.parentElement.remove();
}
function empty(e){
	e.parentElement.parentElement.remove();
}