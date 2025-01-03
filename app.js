const mail = document.getElementById("mail");
const invalidicon = document.getElementById("invalid-icon");
const invalid = document.getElementById("invalid");
const btn = document.getElementById("btn");

function validity(e){
  e.preventDefault();
  let getmail = mail.value.trim();
  invalid.classList.remove("hidden");
  if(getmail == ""){
    invalid.innerText = "Input field cannot be empty";
    mail.classList.add("border-Soft_Red");
    invalid.classList.remove("text-green");
    mail.classList.remove("border-green");
  }
  else{
    if(mailValidation(getmail)){
      invalid.innerText = "Submitted successfully";
      invalidicon.classList.add("hidden");
      invalid.classList.add("text-green");
      mail.classList.add("border-green");
    }
    else{
      invalid.innerText = "Enter a valid mail-id";
      invalidicon.classList.remove("hidden");
      mail.classList.add("border-Soft_Red");
      invalid.classList.remove("text-green");
      mail.classList.remove("border-green");

    }
  }
}

function mailValidation(getmail){
  const cont = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return cont.test(getmail)
}
btn.addEventListener("click",validity);







