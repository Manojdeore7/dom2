let header=document.getElementById("header-title");
console.log(document.doctype);
header.innerText="Mnaoj Deore";
header.parentNode.style.border="1px black solid";
let list=document.querySelectorAll(".list-group-item");
list[2].style.color="red";
list[1].style.background="green";
for(let i=0;i<list.length;i++){
    let bold=document.createElement("b");
    bold.innerText= list[i].innerText;
    list[i].innerText="";
    list[i].append(bold);
    
}
