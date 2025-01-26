import { useState } from 'react';

function AnswerFirstForm(props){
    const [answerSent, setAnswerSent] = useState(false);
    const [answer, setAnswer] = useState("");

  
    
    const handleSubmit = (event) => {
        
        event.preventDefault();
        fetch('/api/answerfirst/' + props.playerId + "/" + props.sessionId, {
            method: 'POST',
            body: JSON.stringify({answerfirst: answer}),
            headers: {
              'Content-Type': 'application/json'
            },
        })
        .then(setAnswerSent(true))
        .catch(error =>{
            console.log(error);
        })
    }

    const handleButton = (event) => {
        event.preventDefault();
        setAnswer(event.target.value);
    }
    
    if(!answerSent){
        return(
        
            <form onSubmit={handleSubmit}>
                <h2>You have currently chosen: <span>{answer}</span></h2>
                <h2>Your player id: {props.playerId}</h2>
                <button onClick={handleButton} value="A">A</button>
                <button onClick={handleButton} value="B">B</button>
                <button type="submit"> Submit </button>
            </form>
        )
    }
    else{
        return(
            <div>
                 <h1>Your answer has been registered!</h1>
                 <h1>Wait for more instructions</h1>
            </div>
        )
    }
}
export default AnswerFirstForm;