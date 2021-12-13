let saveFile = () => {
    	
    // Get the data from each element on the form.
    const firstName = document.getElementById('Fname');
    const lastName = document.getElementById('Lname');
    const cardNumber = document.getElementById('Cnumber');
    const expDate = document.getElementById('date');
    const cvv = document.getElementById('cvv');
    
    // This variable stores all the data.
    let data = 
        '\r firstName: ' + firstName.value + ' \r\n ' + 
        'lastName: ' +lastName.value + ' \r\n ' + 
        'cardNumber: ' + cardNumber.value + ' \r\n ' + 
        'expDate: ' + expDate.value + ' \r\n ' + 
        'cvv: ' + cvv.value;
    
    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'formData.txt';	   // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click(); 
}