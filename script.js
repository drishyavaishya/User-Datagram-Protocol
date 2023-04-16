let dataLength1 = Math.floor(Math.random() * 1000);
let destinationPort1 = Math.floor(Math.random() * 65000);
let availablePorts1 = Math.floor(Math.random() * 65000) + 1024;
document.getElementById("data-length-1").innerHTML = dataLength1;
document.getElementById("destination-port-1").innerHTML = destinationPort1;
document.getElementById("available-ports-1").innerHTML = availablePorts1;
let sourcePort1 = 0;


//  function to verify the header added
function verifyAddedHeader() {
    let sourcePort1Input = document.getElementById("source-port-1-input").value;
    sourcePort1 = sourcePort1Input;
    let destinationPort1Input = document.getElementById("destination-port-1-input").value;
    let length1Input = document.getElementById("length-1-input").value;

    if (length1Input - 8 == dataLength1 && sourcePort1Input <= availablePorts1 && sourcePort1Input >= 1024 && destinationPort1 == destinationPort1Input) {
        console.log("success");
        addLog("Header Added sucessfully!!!");
        showLogdata();
        fillResponse();

    } else {
        console.log("failed");
        addLog("Adding Header Failed!!! Try Again!!");
        showLogdata();
    }

}

let length2 = 0;

// function to send response if verifyAddedHeader is successful
function fillResponse() {
    length2 = Math.floor(Math.random() * 1000) + 1024;
    let responseText = "Response Arrived!!!";
    addLog("Response Arrived!!");
    showLogdata();
    document.getElementById("response-text").innerHTML = responseText;
    document.getElementById("length-2").innerHTML = length2;
    document.getElementById("source-port-2").innerHTML = destinationPort1;
    document.getElementById("destination-port-2").innerHTML = sourcePort1;
}


// function to verify the breakdown of response arrived
function verifyBreakdown() {
    let destinationPort2Input = document.getElementById("destination-port-2-input").value;
    let dataLength2Input = document.getElementById("data-length-2-input").value;

    if (destinationPort2Input == sourcePort1 && dataLength2Input == length2 - 8) {
        console.log("success");
        addLog("Header Breakdown sucessfully!!!");
        showLogdata();
        chatAgain();
    } else {
        console.log("failed");
        console.log(dataLength2Input);
        console.log(length2);
        console.log(destinationPort2Input);
        console.log(sourcePort1);
        addLog("Header Breakdown Failed!!! Try Again!!");
        showLogdata();
    }
}

// function to chat again after a connection is established
function chatAgain() {
    let dl1 = Math.floor(Math.random() * 1000) + 1024;
    dataLength1 = dl1;
    document.getElementById("data-length-1").innerHTML = dl1;
    document.getElementById("length-2").innerHTML = "";
    document.getElementById("available-ports-text").innerHTML = sourcePort1;
    addLog("Chat Again!!!");
    showLogdata();

}

//history data for history log
const historyData = [];


// function of update history log
function addLog(s) {
    historyData.push({ data: s });
}


// function to show log
function showLogdata() {
    var log = document.getElementById("log");
    var string = " ";
    for (var key in historyData) {
        string +=
            "" +
            historyData[key]["data"] +
            "<br>";
    }
    log.innerHTML = string;
}