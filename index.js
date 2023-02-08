
const hide = document.querySelector(".hide"); 
const show = document.querySelector(".show"); 
const passwordInput = document.querySelector(".password-input"); 
 
hide.addEventListener("click", (event) => { 
  event.preventDefault(); 
  show.classList.add("displayed"); 
  hide.classList.add("hidden"); 
  passwordInput.setAttribute("type", "text"); 
}); 
show.addEventListener("click", (event) => { 
  event.preventDefault(); 
  hide.classList.remove("hidden"); 
  show.classList.remove("displayed"); 
  passwordInput.setAttribute("type", "password"); 
}); 
 
const inputs = document.querySelectorAll(".modal-from__input"); 
inputs.forEach((item) => { 
  item.oninput = (event) => { 
    const value = event.target?.value; 
    const label = item.querySelector(".modal-form__label"); 
    label.style.display = !!value ? "none" : "inline"; 
  }; 
}); 
 

const validateForm = (event) => { 
  event.preventDefault(); 
  const passwordField = document.querySelector(".password-input"); 
  if (passwordField?.value?.length < 6) { 
    if (!passwordField?.parentElement.classList.contains("error")) { 
      const error = document.createElement("span"); 
      error.innerText = "Пароль должен быть не менее 6 символов"; 
      passwordField?.parentElement.appendChild(error); 
    } 
    passwordField?.parentElement.classList.add("error"); 
  } else { 
    passwordField.parentElement.classList.remove("error"); 
  } 
 
  const passwordСonfirmationField = document.querySelector(".password-confirmation"); 
 
  if (passwordField?.value !== passwordСonfirmationField?.value) { 
    if (!passwordСonfirmationField.parentElement.classList.contains("error")) { 
      const error = document.createElement("span"); 
      error.innerText = "Пароли не совпадают"; 
      passwordСonfirmationField?.parentElement.appendChild(error); 
    } 
    passwordСonfirmationField.parentElement.classList.add("error"); 
  } else { 
    passwordСonfirmationField.parentElement.classList.remove("error"); 
  } 
 
  const controlString = document.querySelector(".control-string"); 
  if (!controlString.parentElement.classList.contains("error")) { 
    const error = document.createElement("span"); 
    error.innerText = "Контрольная строка не совпадает"; 
    controlString?.parentElement.appendChild(error); 
  } 
 
  controlString.parentElement.classList.add("error"); 
}; 
 
password_recovery_form.addEventListener("submit", validateForm);
