var lendername = "";
//creating the array to represent the database for the loggedout user and loginuser
let booklist = [
    {
        id: 1,
        bookname: "Book1",
        authorname: "Author1",
        lender: "UserC",
        borrower: "UserB",
        action: "",
    },
    {
        id: 2,
        bookname: "Book2",
        authorname: "Author2",
        lender: "UserC",
        borrower: "",
        action: "",
    },
    {
        id: 3,
        bookname: "Book3",
        authorname: "Author3",
        lender: "UserD",
        borrower: "UserC",
        action: "",
    },
    {
        id: 4,
        bookname: "Book4",
        authorname: "Author4",
        lender: "UserA",
        borrower: "",
        action: "",
    },
    {
        id: 5,
        bookname: "Book5",
        authorname: "Author5",
        lender: "UserA",
        borrower: "",
        action: "",
    },
    {
        id: 6,
        bookname: "Book6",
        authorname: "Author6",
        lender: "UserB",
        borrower: "UserA",
        action: "",
    },
];


//Function to add a button in the action coloumn such as return or borrow
function addAction() {
    for (i = 0; i < booklist.length; i++) {
        booklist[i].action = "";
        if (lendername !== "") {
            if (lendername !== booklist[i].lender && booklist[i].borrower === "") {
                booklist[i].action = "borrow";
            }
            if (lendername == booklist[i].borrower) {
                booklist[i].action = "return";
            }
        }
    }
}

//clearing the action of the previous logged in user for the new user
function removeAction() {
    for (i = 0; i < booklist.length; i++) {
        booklist[i].action = "";
    }
}


//adding buttons such as return or borrow to the action coloumn
function addButton() {
    const body = document.getElementById("tbody");
    for (var j = 0; j < booklist.length; j++) {
        let row = body.rows[j];

        if (booklist[j].action === "return") {
            var btn = document.createElement("button");
            btn.className = "returnbutton";
            var node = "return";
            btn.append(node);
            row.cells[5].append(btn);
        }
        if (booklist[j].action === "borrow") {
            var btn = document.createElement("button");
            btn.className = "borrowbutton";
            var node = "borrow";
            btn.append(node);
            row.cells[5].append(btn);
        }
    }
}

//function to dynamically exapnd my array of bookclub
function init() {
    deleteRows();
    addAction();
    if (lendername === "") {
        removeAction();
    }
    const body = document.getElementById("tbody");
    for (var j = 0; j < booklist.length; j++) {
        var row = document.createElement("tr");

        bookattri = [
            booklist[j].id,
            booklist[j].bookname,
            booklist[j].authorname,
            booklist[j].lender,
            booklist[j].borrower,
            "",
        ];

        for (var i = 0; i < 6; i++) {
            var cell = document.createElement("td");
            var cellText = document.createTextNode(bookattri[i]);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        body.appendChild(row);
    }

    addButton();
}

init();



var flag = 0;
const login = document.getElementById("login");
login.addEventListener("submit", (e) => {
    e.preventDefault();

    const loggedinuser = document.getElementById("logged-in-user-name");
    if (e.target[0].value == "") {
        loggedinuser.innerHTML = "No user logged in";
        document.getElementById("addbook").style.display = "none";
        lendername = "";
        init();
    } else if (
        e.target[0].value == "UserA" ||
        e.target[0].value == "UserB" ||
        e.target[0].value == "UserC" ||
        e.target[0].value == "UserD"
    ) {
        loggedinuser.innerHTML = `Logged in user: ${e.target[0].value}`;
        document.getElementById("addbook").style.display = "";
        addbook = document.getElementById("addbook");
        addbook.rows[0].cells[3].innerHTML = e.target[0].value;
        lendername = e.target[0].value;
        init();

        body = document.getElementById("tbody");
        n = body.rows.length;
        console.log(n);

        for (var i = 0; i < n; i++) {
            row = body.rows[i];
            if (row.cells[5].childNodes.length > 1) {

                (function (index) {
                    row.cells[5].childNodes[1].onclick = function () {
                        console.log(index)
                        if (booklist[index].borrower === '') {
                            booklist[index].borrower = lendername
                        }
                        else {
                            booklist[index].borrower = ''
                        }
                        console.log(booklist)
                        init()
                    };
                })(i);
            }
        }

    } else {
        loggedinuser.innerHTML = "No user logged in";
        document.getElementById("addbook").style.display = "none";
        lendername = "";
        init();
    }

    login.reset();
});

document.getElementById("addbook").style.display = "none";
const addbookform = document.getElementById("addbookform");
addbookform.addEventListener("submit", (event) => {
    event.preventDefault();

    let book = {
        id: 0,
        bookname: "",
        authorname: "",
        lender: "",
        borrower: "",
        action: "",
    };

    book.id = booklist[booklist.length - 1].id + 1;
    book.bookname = event.target[0].value;
    book.authorname = event.target[1].value;
    book.lender = lendername;
    booklist.push(book);
    init();
    addbookform.reset();
});

//function to remove all the rows from database
function deleteRows() {
    var n = document.getElementById("tbody").children.length;
    for (j = 0; j < n; j++) {
        document.getElementById("tbody").children[0].remove();
    }
}