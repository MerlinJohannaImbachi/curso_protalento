const generatePassword = (baseNumbers, length) => {
  let password = "";
  for (let x = 0; x < length; x++){
      let random = Math.floor(Math.random() * baseNumbers.length);
      password += baseNumbers(random);
  }
  return password;
}
const generate = () => {
  let length = parseInt(inputLength.value);

  let baseNumbers ="0123456789";
  const  caracters  = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const symbols = ".?,;-_:¿'*/+()[]{}|@><";

  if (checkbox1.checked) baseNumbers += caracters;
  if(checkbox2.checked) baseNumbers += symbols;

  generatePassword.innerText ="aaa";
}
 window.addEventListener("DOMContentLoaded", () => {
  btnGenerate.addEventListener("click", () => {
    generate();
  });
 });
 
