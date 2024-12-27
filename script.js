window.onload = ()=>{
const keys = document.getElementsByClassName("key");
const textElement = document.getElementById("typeWriter")
const typeValue = document.getElementById("type_value");
const typeRunButton = document.getElementsByClassName("run_typeWriter")[0]

const keySpace = document.getElementsByClassName("space")[0]
const keyBackSpace = document.getElementsByClassName("Backspace")[0]
const keyTab = document.getElementsByClassName("tab")[0]
const capsLock = document.getElementsByClassName("capslock")[0]


for(let i = 0; i < keys.length; i++){
    const key = keys[i];
    key.addEventListener("click", ()=>{

        if (key === keyBackSpace){
            typeValue.innerText =  typeValue.innerText.slice(0, -1);
        } else if (key === keySpace){
            typeValue.innerText += "  ";
        } else {
            typeValue.innerText += key.innerText;
        }

    })
}

typeRunButton.addEventListener("click", ()=>{
    const text = typeValue.innerText;
    let i=0;
    const interval = setInterval(()=>{
        if(text.length-1<=i) clearInterval(interval);
        textElement.innerText+=text[i];
        i++;
    }, 500)
})


}
