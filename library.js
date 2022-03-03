// Write your code here!
let i = 6
var lendername=''
function row() {

    var MyTable = document.getElementById('formbody')
    var newRow = MyTable.insertRow(-1)
    var newcell1 = newRow.insertCell(0)
    var newcell2 = newRow.insertCell(1)
    var newcell3 = newRow.insertCell(2)
    var newcell4 = newRow.insertCell(3)
    var newcell5 = newRow.insertCell(4)
    var newcell6 = newRow.insertCell(5)
    newcell1.innerHTML = i + 1
    i++
    newcell2.innerHTML = book.bookname
    newcell3.innerHTML = book.authorname
    newcell4.innerHTML=lendername


}


let book = {
    bookname: "",
    authorname: ""
}
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {

    event.preventDefault();

    book.bookname = event.target[0].value
    book.authorname = event.target[1].value
    form.reset()
    row()

});

document.getElementById('addbook').style.display = "none";

const login = document.getElementById("login")
login.addEventListener('submit', (e) => {
    e.preventDefault();
    const loggedinuser = document.getElementById("logged-in-user-name")
    if (e.target[0].value == '') {
        loggedinuser.innerHTML = 'No user logged in'
        document.getElementById('addbook').style.display = "none";
    }
    if (e.target[0].value == 'UserA' || e.target[0].value == 'UserB' || e.target[0].value == 'UserC' || e.target[0].value == 'UserD') 
    {
        loggedinuser.innerHTML = `Logged in user: ${e.target[0].value}`
        document.getElementById('addbook').style.display = "";
        const lendernamee=document.getElementById('addbook')
        addbook.rows[0].cells[3].innerHTML=e.target[0].value
        lendername=e.target[0].value
    }
    else {
        loggedinuser.innerHTML = 'No user logged in'
        document.getElementById('addbook').style.display = "none";
    }

    login.reset()
})