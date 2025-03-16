function submitMessage() {
    const message = document.getElementById('message');
    if (message.value) {
        fetch('http://localhost:5100/set-scheduler', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userInput: message.value})
        }).then(response => { 
            console.log(response);
        }).catch(error => {
            alert(error.message)
        })
    } else { 
        alert('write some content please');
    }
}