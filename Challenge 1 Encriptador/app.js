let llaves = ["a","e","i","o","u"]
let llavesDesencriptar = ["ai", "enter", "imes", "ober", "ufat"]

let textAreaClear = document.getElementById("textareaEncriptar");
textAreaClear.addEventListener("focus", function() {
    textAreaClear.value = " ";
});


let textAreaClear2 = document.getElementById("textareaDesencriptar");
textAreaClear2.addEventListener("focus", function() {
    textAreaClear2.value = " ";
});


function capturaTexto(){
let textarea = document.getElementById("textareaEncriptar");
let texto = textarea.value;
let textoProcesado = preProcesadorDeTexto(texto);
let textoEncriptado = encriptador(textoProcesado)
textarea.value="";
let contenedorTexto = document.getElementById("contenedor");
contenedorTexto.textContent ="";
let nodoTexto = document.createTextNode(textoEncriptado);
contenedorTexto.appendChild(nodoTexto);
return textoEncriptado
}


function capturaTextoDesencriptar(){
    let textarea = document.getElementById("textareaDesencriptar");
    let texto = textarea.value;
    let textoDesencriptado = desencriptador(texto);
    textarea.value=""
    let contenedorTexto = document.getElementById("contenedor");
    contenedorTexto.textContent ="";
    let nodoTexto = document.createTextNode(textoDesencriptado);
    contenedorTexto.appendChild(nodoTexto);
    return textoDesencriptado
    }

    function copiarResultado () {
        let contenedorTexto = document.getElementById("contenedor");
        var textoCopiado = contenedorTexto.firstChild.nodeValue;
        var textarea = document.createElement("textarea");
        textarea.value = textoCopiado;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        alert("El texto de la zona de transferencia se ha copiado al portapapeles.");
    }


function preProcesadorDeTexto(textoImput) {
    textoImput = textoImput.replace(/,/g, ''); 
    textoImput = textoImput.replace(/[^\w\s]/g, ''); 
    textoImput = textoImput.toLowerCase();
    return textoImput;
}


function desencriptador(textoADesencriptar) {
    let arrayDeTextoDesencriptado = []
    
    let textoADesencriptarSplit = textoADesencriptar.split(" ");
    console.log(textoADesencriptarSplit.length);

    for (let i = 0; i < textoADesencriptarSplit.length; i++){
            let palabraDummy = textoADesencriptarSplit[i];
        for (let j = 0;j <llavesDesencriptar.length; j++){       
            llaveDummy = llavesDesencriptar[j];
           
          
            if (palabraDummy.includes(llaveDummy)){

                switch (llaveDummy) {
                    case "ai":
                        nuevoTextoEncriptado = palabraDummy.replace(new RegExp(llaveDummy,'g'), "a");
                        palabraDummy = nuevoTextoEncriptado;
                     
                        break;
                    case "enter":
                        nuevoTextoEncriptado = palabraDummy.replace(new RegExp(llaveDummy,'g'), "e");
                        palabraDummy = nuevoTextoEncriptado;
                       
                        break;
                    case "imes":
                        nuevoTextoEncriptado = palabraDummy.replace(new RegExp(llaveDummy,'g'), "i");
                        palabraDummy = nuevoTextoEncriptado;
                        
                        break;    
                    case "ober":
                        nuevoTextoEncriptado = palabraDummy.replace(new RegExp(llaveDummy,'g'), "o");
                        palabraDummy = nuevoTextoEncriptado;
                       
                        break;
                    case "ufat":
                        nuevoTextoEncriptado = palabraDummy.replace(new RegExp(llaveDummy,'g'), "u");
                        palabraDummy = nuevoTextoEncriptado;
                        
                        break;    
                    default:
                        break;
                }
                arrayDeTextoDesencriptado.push(palabraDummy);
            }
            }
    }

   
let arrayDummy = arrayDeTextoDesencriptado[arrayDeTextoDesencriptado.length - 1];    
let arrayDeTextoConcatenado = arrayDummy;
return arrayDeTextoConcatenado




















    
}



function encriptador(textoAEncriptar) {
    let arrayDeTextoEncriptado = [];
            for (let i = 0; i < textoAEncriptar.length; i++) {
                if (llaves.includes(textoAEncriptar[i])) {
                    switch (textoAEncriptar[i]){
                        case "a":
                          nuevoTextoEncriptado = textoAEncriptar[i].replace(new RegExp(textoAEncriptar[i],'g'), "ai");
                          arrayDeTextoEncriptado.push(nuevoTextoEncriptado)
                    break;
                        case "e":
                            nuevoTextoEncriptado = textoAEncriptar[i].replace(new RegExp(textoAEncriptar[i],'g'), "enter");
                            arrayDeTextoEncriptado.push(nuevoTextoEncriptado)
                            
                     break;
                        case "i":
                            nuevoTextoEncriptado = textoAEncriptar[i].replace(new RegExp(textoAEncriptar[i],'g'), "imes");
                            arrayDeTextoEncriptado.push(nuevoTextoEncriptado)
                           
                    break;
                        case "o":
                            nuevoTextoEncriptado = textoAEncriptar[i].replace(new RegExp(textoAEncriptar[i],'g'), "ober");
                            arrayDeTextoEncriptado.push(nuevoTextoEncriptado)
                            
                    break;
                        case "u":
                            nuevoTextoEncriptado = textoAEncriptar[i].replace(new RegExp(textoAEncriptar[i],'g'), "ufat");
                            arrayDeTextoEncriptado.push(nuevoTextoEncriptado)
                            
                    break;
                    }
        }
        else{
            arrayDeTextoEncriptado.push(textoAEncriptar[i])
        }
        
    }
    let arrayDeTextoConcatenado = arrayDeTextoEncriptado.join("");
    return arrayDeTextoConcatenado//nuevoTextoEncriptado;
    
}


