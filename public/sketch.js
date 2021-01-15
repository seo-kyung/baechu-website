
const button = document.getElementById("button");
console.log('working');
button.addEventListener("click", async () => {
    
    const message = document.getElementById("message").value;
    console.log(message)
    const data = {message};
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    };
    
  fetch('/api', options).then(response => {console.log(response);}); 

  window.location.reload(false); 
});

