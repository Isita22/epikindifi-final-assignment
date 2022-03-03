// Write your code here!
let i=7
function row()
{
    
    var MyTable=document.getElementById('info-table')
    var newRow=MyTable.insertRow(-1)
    var newcell1=newRow.insertCell(0)
    var newcell2=newRow.insertCell(1)
    var newcell3=newRow.insertCell(2)
    var newcell4=newRow.insertCell(3)
    var newcell5=newRow.insertCell(4)
    var newcell6=newRow.insertCell(5)
    newcell1.innerHTML=i+1
    i++
    newcell2.innerHTML=book.bookname
    newcell3.innerHTML=book.authorname

}


let book={bookname:"",
authorname:""}
const form=document.getElementById('form');

form.addEventListener('submit', (event) => {
    // stop form submission
    event.preventDefault();

    console.log(event.target[0].value,event.target[1].value)
    book.bookname=event.target[0].value
    book.authorname=event.target[1].value
    row()

});



// var button=document.getElementById("botton")
// button.addEventListener("click",(event)=>{
// row()
// console.log("button")
// })