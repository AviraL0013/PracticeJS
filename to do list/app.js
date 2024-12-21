let inputbox=document.getElementById("inputbox")
let listconatiner=document.getElementById("list")
let button=document.querySelector(".btn")
button.addEventListener("click",()=>{
    if(inputbox.value===''){
        alert("You must write something")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML=inputbox.value
        listconatiner.appendChild(li)
        let icon=document.createElement("span")
        icon.innerHTML="\u00d7"
        li.appendChild(icon)
    }
    inputbox.value=""
    savedata()
})
listconatiner.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata()
    }
})
function savedata(){
    localStorage.setItem("data",listconatiner.innerHTML)
}
function showdata(){
    listconatiner.innerHTML=localStorage.getItem("data")
}
showdata()