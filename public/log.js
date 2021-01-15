getData();
async function getData(){

    const log_response = await fetch('/api');
    const log_data = await log_response.json();
    console.log(log_data.data);
    
    //sort and order the message by the date
    log_data.data.sort(function(x, y){
        return y.timestamp - x.timestamp;
    })


    for (item of log_data.data) {
        const root = document.createElement('div');
        root.className = "comment";

        const log_message = document.createElement('div'); 
        const log_time = document.createElement('div');
        log_time.className = "time";
       
        log_message.textContent = item.message;
        const dateString = new Date(item.timestamp).toLocaleString();
        log_time.textContent = dateString;
        root.append(log_message, log_time);

        document.getElementById('comment_container').append(root);
    }
    
}

