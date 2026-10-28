let sock_count = 8; 
let taken_socks = 0;

function currSockCount() {
    document.getElementById("sock-count").textContent = "You currently have " + sock_count + " socks!";
}

function printName() {
    let name = document.getElementById("name").value;
    document.getElementById("title").textContent = name + "'s Sock Drawer";
}

function takeSock() {
    if (sock_count <= 0) {
        document.getElementById("sock-count").textContent = "You are out of socks!";
    } else {
        sock_count--;
        taken_socks++;
        document.getElementById("message").textContent = "You took a sock!";
        currSockCount();
    }
}

function returnSock() {
    if(taken_socks <= 0) {
        document.getElementById("sock-count").textContent = "You don't have any socks to return!";
        return;
    } else {
        sock_count++;
        taken_socks--;
        document.getElementById("message").textContent = "You returned a sock!";
        currSockCount();
    }
}

function returnAllSocks() {
    if(taken_socks <= 0) {
        document.getElementById("sock-count").textContent = "You don't have any socks to return!";
        return;
    } else {
        while (taken_socks > 0) {
            sock_count++;
            taken_socks--;
        }
        document.getElementById("message").textContent = "You returned all your socks!";
        currSockCount();
    }
}
