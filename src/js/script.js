import { AlertError } from './alertError.js';
import { Modal } from './modal.js';
import { Utils } from './utils.js'

const inputWeight = document.querySelector("#inputKG");
const inputHeigth = document.querySelector("#inputCm");
const form = document.querySelector("form");

form.onsubmit = event => {
  event.preventDefault();
  const heigth = inputHeigth.value/100;
  const weight = inputWeight.value;


  const variablesIsNotANumber = Utils.isNotANumber(heigth) || Utils.isNotANumber(weight);

  if(variablesIsNotANumber) {
    AlertError.show(); 
    return;
  }

  AlertError.hide();

  const imc = Utils.calcIMC(weight, heigth);
  showIMCResult(imc);
};

function showIMCResult(imc){
  inputHeigth.value = "";
  inputWeight.value = "";
  
  Modal.text.innerText = `Seu IMC é de: ${imc}`;
  Modal.open();
}

inputWeight.oninput = () => AlertError.hide();
inputHeigth.oninput = () => AlertError.hide();