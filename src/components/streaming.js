import React from "react";

const Streamer = (props) => {

    let socket = {}

    const contactServer = () => {
    
        let ip = document.getElementById("ip").value

        console.log(`Connecting websocket server at IP: ${ip}`)

        socket = new WebSocket(`ws://${ip}:8000`)

        socket.addEventListener('open', function (event) {
            socket.send('Connection Established')
        })

        // Load image
        socket.addEventListener('message', function (event) {
            console.log(event.data);
            document.getElementById("ItemPreview").src = URL.createObjectURL(event.data);
        })
    
    }

    return ( 
        <div className="wrapper" {...props}>
            <label htmlFor="ip">Server Local IP:</label>
            <input type="text" id="ip" name="ip"/><br></br>
            <button onClick={contactServer}>Connect</button><br></br>
            <img id="ItemPreview" src=""/>
        </div>
    )
}

export default Streamer