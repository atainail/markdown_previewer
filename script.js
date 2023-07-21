let editorText = document.querySelector("#editor");
let previewText = document.querySelector("#preview");
let changeLayout = document.querySelector("#btn");
let reset = document.querySelector("#reset");
let clear = document.querySelector("#clear");

let defaultText = `This is a <h1> header </h1>
and this is <b> bold </b> and this is <i> italics </i>
This is going to be <span style="color:red;"> red text</span>.`;

editorText.innerHTML = defaultText;
previewText.innerHTML =  editorText.value;


editorText.addEventListener("keyup", function(){  
    previewText.innerHTML =  editorText.value; 
});

// changeLayout.addEventListener("click", function(){  
//     if(changeLayout.innerHTML == "Vertical Layout"){
//         changeLayout.innerHTML = "Hortizonal Layout";    
//     } else {
//         changeLayout.innerHTML = "Vertical Layout";    
//     }
// });

reset.addEventListener("click", function(){  
    editorText.value = defaultText;
    previewText.innerHTML = editorText.value;
});

clear.addEventListener("click", function(){  
    editorText.value = " ";
    previewText.innerHTML = " ";
});





