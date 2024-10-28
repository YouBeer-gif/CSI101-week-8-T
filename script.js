function ex1() {
    let firstName = document.getElementById('firsName').value;
    let lastName = document.getElementById('lsename').value;
    let email = document.getElementById('gmail').value;

    // Display the collected information
    document.getElementById("id_output_ex1").innerHTML =
     "firsNam: "+ firstName +"<br>"+
     "lastName :"+lastName + "<br>"+    
      +"email :"+email;
}
function ex2(width, length) {
    return width * length;
}

let clickCount = 0;

function ex3() {
    if (clickCount < 10) {
        clickCount++; // Increment counter on each click

        let output_ex3 = Math.random() * 10;
        document.getElementById('id_output_ex3_3').innerHTML = output_ex3.toFixed(0);
        
        let output_ex2 = Math.random() * 10;
        document.getElementById('id_output_ex3_2').innerHTML = output_ex2.toFixed(0);
        
        let output_ex1 = Math.random() * 10;
        document.getElementById('id_output_ex3_1').innerHTML = output_ex1.toFixed(0);
    }

    if (clickCount === 10) {
        alert("MMMM"); // Correct usage of alert
    }
}