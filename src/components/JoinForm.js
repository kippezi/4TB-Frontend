import { useState } from 'react';


function JoinForm (props){
    const [answerSent, setAnswerSent] = useState(false);
    const [playerName, setPlayerName] = useState("");
    
    const handleSubmit = (event) => {
        
        event.preventDefault();
        
        fetch('/api/player', {
            method: 'POST',
            body: JSON.stringify({playername: playerName, sessionid: props.sessionId}),
            headers: {
              'Content-Type': 'application/json'
            },
            credentials: "include"
        })
        .then(() => {
            props.SetPlayerId();
            props.SetSessionId();
            setAnswerSent(true);
        })
        .catch(error =>{
            console.log(error);
            console.log(JSON.stringify({playername: playerName, sessionid: props.sessionId}));
        })
    }

    const handleplayerName = (event) => {
        setPlayerName(event.target.value);
    }
    
    if(!answerSent){
        return(
        
            <form onSubmit={handleSubmit}>
                <label>Enter your desired player name:</label>
                <input 
                    type="text" 
                    name="playerName" 
                    value={playerName} 
                    onChange={handleplayerName}
                />
                <button type="submit"> Submit </button>
            </form>
        )
    }
    else{
        return(
            <div>
                 <h1>You have joined the game!</h1>
                 <h1>Wait for more instructions</h1>
            </div>
        )
    }
  
}
export default JoinForm;