function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
  }

function openNav() {
    document.getElementById("mySidebar").style.width = "28%";
    document.getElementById("mySidebar").style.display = "block";
}
function closeNav() {
    document.getElementById("mySidebar").style.display = "none";
}

async function getapi() {
    
    // Storing response
    const response = await fetch("http://127.0.0.1:5000/stories");
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    show(data);
}

function show(data) {
    document.getElementById("story").innerHTML = data;
}
getapi()