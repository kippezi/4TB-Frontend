import { useState} from 'react';


function AnswerSecondForm(props){
    const [answerSent, setAnswerSent] = useState(false);
    const [answer, setAnswer] = useState("");
    
    const handleSubmit = (event) => {
        
        event.preventDefault();
       
        fetch('/api/answersecond/' + props.playerid + "/" + props.sessionId, {
            method: 'POST',
            body: JSON.stringify({answersecond: answer}),
            headers: {
              'Content-Type': 'application/json'
            },
        })
        .then(setAnswerSent(true))
        .catch(error =>{
            console.log(error);
        })
    }

    const handleChange = (event) => {
        setAnswer(event.target.value);
    }
    
    if(!answerSent){
            return(            
                <form onSubmit={handleSubmit}>
                    <label>For how much do you think the player in question would do it for?:</label>
                    <input 
                        type="number" 
                        name="answer" 
                        value={answer} 
                        onChange={handleChange}
                    />
                    <button type="submit"> Submit </button>
                </form>
            );      
    }
    else{
        return(
            <div>
                 <h1>Your answer has been registered!</h1>
                 <h1>Wait for more instructions</h1>
            </div>
        );
    }
}
export default AnswerSecondForm;
