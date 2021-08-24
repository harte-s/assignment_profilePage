


//             req  conn
var counters = [2,500];
var spans = [
    document.querySelector("#connectionrequestcounter"),
    document.querySelector("#yourconnectionscounter")
]

var tode = document.querySelector("#tode");
var phik = document.querySelector("#phik");


function accept(element){
    counters[0]--;
    counters[1]++;
    spans[0].innerHTML = counters[0];
    spans[1].innerHTML = counters[1];
    element.remove();
}


function reject(element) {
    counters[0]--;
    spans[0].innerHTML = counters[0];
    element.remove();
}


//edit profile name change

var displayName = document.querySelector("#displayname");

function editProfile (){
    displayName.innerHTML = "Darth Vader";
}