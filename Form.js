function selectedValue(){

  let valorfinal = "";

  const selectedValue = document.getElementById('pw_ammount').innerText;
        valorfinal = selectedValue;
  
}

function orderNumber(){

  const orderNumber = `order_${Math.floor(Math.random() * 1000000000)}`;
  console.log(orderNumber);
  
}

function Apikey(){

  const API_KEY = "N2Y5NGQyZWQ2NTljZmQyY2VjMGRhZjVkMTZjY2MxNmNkNzk1YmE5NWM0ZWM2OTg5YWUzMzQ5NDhmM2NjYzlkMDkyMTZhMWEzMTJkOGYyYWZjYjRhOWE3ZGUyODYwOWI5ZGQ0NmI3ZGRjZjVkOGI0NWMzNzgxOGEyZDgxZDEwNjY=";
  console.log(API_KEY);

}  

function OcultarBtn(){

const pwModalBoton = document.getElementById("pwModal");
pwModalBoton.style.display = "none";

  var pwPayModal = document.getElementById("pwPayModal");
      pwPayModal.classList.remove("container-13");
      pwPayModal.classList.add("modalContainer-pw", "container-13");

}
                       
