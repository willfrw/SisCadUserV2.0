console.log("Script Running!");
document.addEventListener("DOMContentLoaded", function () {
    const inputFile = document.querySelector("#picture__input");
    const pictureImage = document.querySelector("#picture__image");
    const pictureImageTxt = "Foto 3x4";
    pictureImage.innerHTML = pictureImageTxt;

inputFile.addEventListener("change", function (e) {
    console.log("File input changed!");
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("picture__img");

      pictureImage.innerHTML = "";
      pictureImage.appendChild(img);
    });

    reader.readAsDataURL(file);
  } else {
    pictureImage.innerHTML = pictureImageTxt;
  }
});
});


function cmToPixels(cm) {
    const inchToCm = 2.54;
    const pixelsPerInch = 96; // Ajuste conforme a resolução do dispositivo
    return cm * inchToCm * pixelsPerInch;
}

function mascaraCPF(i){
   
  var v = i.value;
  
  if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
     i.value = v.substring(0, v.length-1);
     return;
  }
  
  i.setAttribute("maxlength", "14");
  if (v.length == 3 || v.length == 7) i.value += ".";
  if (v.length == 11) i.value += "-";

}

function mascaraRG(i){
 
 var v = i.value;
 
 if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
    i.value = v.substring(0, v.length-1);
    return;
 }
 
 i.setAttribute("maxlength", "12");
 if (v.length == 2 || v.length == 6) i.value += ".";
 if (v.length == 10) i.value += "-";

}

function mascaraTITULO(i){
 
 var v = i.value;
 
 if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
    i.value = v.substring(0, v.length-1);
    return;
 }
 
 i.setAttribute("maxlength", "17");
 if (v.length == 4 || v.length == 9 || v.length == 14) i.value += " ";
}

function mascaraPIS(i){
   
   var v = i.value;
   
   if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
      i.value = v.substring(0, v.length-1);
      return;
   }
   
   i.setAttribute("maxlength", "14");
   if (v.length == 3 || v.length == 9) i.value += ".";
   if (v.length == 12) i.value += "-";
 
 }

function mascaraCEP(i){
 
 var v = i.value;
 
 if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
    i.value = v.substring(0, v.length-1);
    return;
 }
 
 i.setAttribute("maxlength", "9");
 if (v.length == 5) i.value += "-";
}

function mascaraTEL(i){
 var v = i.value;
 var temp = 0;
 
 if(isNaN(v[v.length-1])){ // Impede a entrada de caracteres que não sejam números
    i.value = v.substring(0, v.length-1);
    return;
 }
 
 i.setAttribute("maxlength", "14"); 
 
 if (v.length == 1) {
    temp = v;
    i.value = '(' + temp; 
 } else if (v.length == 3) {
    i.value = v + ') '; 
 } else if (v.length == 9) {
    i.value = v + '-';
 }
}

function mascaraCEL(i){
 var v = i.value;
 var temp = 0;
 
 if(isNaN(v[v.length-1])){ // Impede a entrada de caracteres que não sejam números
    i.value = v.substring(0, v.length-1);
    return;
 }
 
 i.setAttribute("maxlength", "15"); 
 
 if (v.length == 1) {
    temp = v;
    i.value = '(' + temp; 
 } else if (v.length == 3) {
    i.value = v + ') '; 
 } else if (v.length == 10) {
    i.value = v + '-';
 }
}


// Função para calcular a idade
function calculateAge() {
 // èga o valor do input de data de nascimento
 let inputDate = document.getElementById('birth-date').value;

 // Checa se o input não está vazio
 if (inputDate !== '') {
     // Separa o valor entre ano, mês e dia
     let separatedDate = inputDate.split('-');
     let year = parseInt(separatedDate[0]);
     let month = parseInt(separatedDate[1]);
     let day = parseInt(separatedDate[2]);

     // Cria a data de nascimento
     let birthDate = new Date(year, month - 1, day);

     // Pega a data atual
     let currentDate = new Date();

     // Calcula a diferença nas datas
     let diff = currentDate - birthDate;

     // Converte o valor em idade
     let age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));

     // Atualiza a idade com a idade calculada
     document.getElementById('age').value = age + ' ANOS';
 } else {
     // Se nenhuma data for selecionada retorna o valor vazio
     document.getElementById('age').value = '';
 }
}

// Adiciona um ouvinte de evento para detectar mudanças no campo de data de nascimento
document.getElementById('birthDate').addEventListener('input', calculateAge);

function printPage() {
   window.print();
 }

 function downloadPDF() {
   const matriculaValue = document.getElementById('Mat').value || 'SemMatrícula';
   const fullnameValue = document.getElementById('fullname').value || 'SemNome';
   const element = document.documentElement;
   const filename = `${matriculaValue}_${fullnameValue}.pdf`;

   const options = {
     margin: 10,
     filename: filename,
     image: { type: 'jpeg', quality: 0.98 },
     html2canvas: { scale: 2 },
     jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
   };

   // Use html2pdf para gerar o PDF
   html2pdf().from(element).set(options).save();
 }

 function savePDFAndSubmit(event) {
   event.preventDefault(); // Impede o envio do formulário padrão imediatamente

   // Baixe o PDF primeiro
   downloadPDF();

   // Aguarde um segundo (1000 milissegundos) antes de enviar o formulário
   setTimeout(() => {
     event.target.submit(); // Envie o formulário após o atraso
   }, 1000);
 }

 function toggleDependentes() {
   var sim = document.getElementById('dependentesSim').checked;
   var dependentesInfo = document.getElementById('dependentesInfo');
   if (sim) {
       dependentesInfo.classList.remove('hidden');
   } else {
       dependentesInfo.classList.add('hidden');
       document.getElementById('dependentesDetails').classList.add('hidden');
       clearDependentesDetails();
   }
}

function generateDependentesInputs() {
   var numDependentes = document.getElementById('numDependentes').value;
   var dependentesDetails = document.getElementById('dependentesDetails');
   var dependentesInputs = document.getElementById('dependentesInputs');
   
   clearDependentesDetails();

   if (numDependentes > 0) {
       dependentesDetails.classList.remove('hidden');
       for (var i = 1; i <= numDependentes; i++) {
           var labelNome = document.createElement('label');
           labelNome.innerHTML = 'Nome do dependente ' + i + ': ';
           var inputNome = document.createElement('input');
           inputNome.type = 'text';
           inputNome.name = 'dependente' + i + 'Nome';
           dependentesInputs.appendChild(labelNome);
           dependentesInputs.appendChild(inputNome);
           dependentesInputs.appendChild(document.createElement('br'));

           var labelNascimento = document.createElement('label');
           labelNascimento.innerHTML = 'Data de nascimento do dependente ' + i + ': ';
           var inputNascimento = document.createElement('input');
           inputNascimento.type = 'date';
           inputNascimento.name = 'dependente' + i + 'Nascimento';
           dependentesInputs.appendChild(labelNascimento);
           dependentesInputs.appendChild(inputNascimento);
           dependentesInputs.appendChild(document.createElement('br'));

           var labelCpf = document.createElement('label');
           labelCpf.innerHTML = 'CPF do dependente ' + i + ': ';
           var inputCpf = document.createElement('input');
           inputCpf.type = 'text';
           inputCpf.name = 'dependente' + i + 'Cpf';
           inputCpf.setAttribute('oninput', 'mascaraCPF(this)');
           dependentesInputs.appendChild(labelCpf);
           dependentesInputs.appendChild(inputCpf);
           dependentesInputs.appendChild(document.createElement('br'));
       }
   }
}

function clearDependentesDetails() {
   var dependentesInputs = document.getElementById('dependentesInputs');
   while (dependentesInputs.firstChild) {
       dependentesInputs.removeChild(dependentesInputs.firstChild);
   }
}

function toggleCargos() {
   var sim = document.getElementById('cargosSim').checked;
   var cargosInfo = document.getElementById('cargosInfo');
   if (sim) {
       cargosInfo.classList.remove('hidden');
   } else {
       cargosInfo.classList.add('hidden');
       document.getElementById('cargosDetails').classList.add('hidden');
       clearCargosDetails();
   }
}

function generateCargosInputs() {
   var numCargos = document.getElementById('numCargos').value;
   var cargosDetails = document.getElementById('cargosDetails');
   var cargosInputs = document.getElementById('cargosInputs');
   
   clearCargosDetails();

   if (numCargos > 0) {
       cargosDetails.classList.remove('hidden');
       for (var i = 1; i <= numCargos; i++) {
           var labelCargo = document.createElement('label');
           labelCargo.innerHTML = 'Cargo ' + i + ': ';
           var inputCargo = document.createElement('input');
           inputCargo.type = 'text';
           inputCargo.name = 'cargo' + i;
           cargosInputs.appendChild(labelCargo);
           cargosInputs.appendChild(inputCargo);
           cargosInputs.appendChild(document.createElement('br'));

           var labelJornada = document.createElement('label');
           labelJornada.innerHTML = 'Jornada de trabalho do cargo ' + i + ' (de ___ às ___h): ';
           var inputJornadaInicio = document.createElement('input');
           inputJornadaInicio.type = 'time';
           inputJornadaInicio.name = 'cargo' + i + 'JornadaInicio';
           var inputJornadaFim = document.createElement('input');
           inputJornadaFim.type = 'time';
           inputJornadaFim.name = 'cargo' + i + 'JornadaFim';
           cargosInputs.appendChild(labelJornada);
           cargosInputs.appendChild(inputJornadaInicio);
           cargosInputs.appendChild(document.createTextNode(' às '));
           cargosInputs.appendChild(inputJornadaFim);
           cargosInputs.appendChild(document.createElement('br'));

           var labelOrgao = document.createElement('label');
           labelOrgao.innerHTML = 'Órgão onde trabalha no cargo ' + i + ': ';
           var inputOrgao = document.createElement('input');
           inputOrgao.type = 'text';
           inputOrgao.name = 'cargo' + i + 'Orgao';
           cargosInputs.appendChild(labelOrgao);
           cargosInputs.appendChild(inputOrgao);
           cargosInputs.appendChild(document.createElement('br'));
       }
   }
}

function clearCargosDetails() {
   var cargosInputs = document.getElementById('cargosInputs');
   while (cargosInputs.firstChild) {
       cargosInputs.removeChild(cargosInputs.firstChild);
   }
}