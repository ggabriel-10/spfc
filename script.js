const torcerSP = document.getElementById('torcer_sp');
const assistirSP = document.getElementById('assistir_sp');
const serFeliz = document.getElementById('ser_feliz');

function handleCheckboxTorcerSP() {
  // Check TorcerSP
  const checkbox = torcerSP; // checkbox recebe o elemento torcerSP, que possui o id torcer_sp
  const checkboxValue = checkbox.checked; // checkboxValue recebe o valor do checkbox

  // Se checkbox estiver marcado, adicionar atributo checked
  if (checkboxValue) {
    checkbox.setAttribute("checked", "checked"); //SetAttribute adiciona um atributo ao elemento, recebendo o nome do atributo e o valor do atributo
  } else {
    checkbox.removeAttribute("checked"); //RemoveAttribute remove um atributo do elemento, recebendo o nome do atributo
  }

  // Se torcerSP e assistirSP estiverem marcados, desabilitar serFeliz
  if(torcerSP.checked && assistirSP.checked){
    serFeliz.disabled = true;
  }else{
    serFeliz.disabled = false;
  }

  // Se torcerSP e serFeliz estiverem marcados, desabilitar assistirSP
  if(torcerSP.checked && serFeliz.checked){
    assistirSP.disabled = true;
  }else{
    assistirSP.disabled = false;
  }
}

function handleCheckboxAssistirSP() {
  // Check AssistirSP
  const checkbox = assistirSP;
  const checkboxValue = checkbox.checked;

  // Se checkbox estiver marcado, adicionar atributo checked
  if (checkboxValue) {
    checkbox.setAttribute("checked", "checked");
  } else {
    checkbox.removeAttribute("checked");
  }

  // Se torcerSP e assistirSP estiverem marcados, desabilitar serFeliz
  if(torcerSP.checked && assistirSP.checked){
    serFeliz.disabled = true;
  }else{
    serFeliz.disabled = false;
  }

  // Se assistirSP e serFeliz estiverem marcados, desabilitar torcerSP
  if(serFeliz.checked && assistirSP.checked){
    torcerSP.disabled = true;
  }else{
    torcerSP.disabled = false;
  }
  
}

function handleCheckboxSerFeliz() {
  // Check SerFeliz
  const checkbox = serFeliz;
  const checkboxValue = checkbox.checked;


  // Se checkbox estiver marcado, adicionar atributo checked
  if (checkboxValue) {
    checkbox.setAttribute("checked", "checked");
  } else {
    checkbox.removeAttribute("checked");
  }


  // Se torcerSP e serFeliz estiverem marcados, desabilitar assistirSP
  if(serFeliz.checked && assistirSP.checked){
    torcerSP.disabled = true;
  }else{
    torcerSP.disabled = false;
  }


  // Se assistirSP e serFeliz estiverem marcados, desabilitar torcerSP
  if(serFeliz.checked && torcerSP.checked){
    assistirSP.disabled = true;
  }else{
    assistirSP.disabled = false;
  }
  
}
