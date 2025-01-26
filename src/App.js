import './App.css';
import { useState, useEffect } from 'react';
import AnswerFirstForm from "./components/AnswerFirstForm";
import AnswerSecondForm from "./components/AnswerSecondForm";
import JoinForm from "./components/JoinForm";



function App() {

 const [formToShow, setFormToShow] = useState("join");
 const [sessionId, setSessionId] = useState();
 const [playerId, setPlayerId] = useState();

 function GetCookieWithName (name){
  const allCookies = document.cookie;
  console.log("cookies raw: "  + allCookies);
  const separateCookiesWhole = allCookies.split(";")
  for (let cookie of separateCookiesWhole){
    let cookieKeyAndValue = cookie.split("=")
    if(cookieKeyAndValue[0].trim() === name){
      return cookieKeyAndValue[1];
    }
  }
 }

 const SetSessionId = () => {
  setSessionId(GetCookieWithName("sessionid"));
  console.log("session id: " + sessionId);
 }

 const SetPlayerId = () => {
  setPlayerId(GetCookieWithName("playerid"));
  console.log("player id: " + playerId);
 }

  // -----------------------FIND SECOND QUESTION ELIGIBILITY--------------------------
 const FindEligibilityForSecondQuestion = () => {
  let isEligibleForSecondQuestion;

  fetch('/api/playerbyid/' + playerId, {
    method: 'GET'
    })
    .then((res) => {return res.json()})
    .then((data)=>{(isEligibleForSecondQuestion = data)})
    .catch(error =>{
        console.log(error);
    })

  return isEligibleForSecondQuestion;
 }

 // -----------------------CHECK THE GAME PHASE--------------------------

  const CheckGamePhase = (data) => {
    let sessionPhase = data.Session.phase
    console.log("session phase: " + sessionPhase);
    console.log("formtoshow: " + formToShow);
   

    if(sessionPhase === "join"){;
      setFormToShow("join");
    }
    else if(sessionPhase === "first-question"){;
      setFormToShow("first-question");
    }
    else if(sessionPhase === "second-question"){
      let isEligibleForSecondQuestion = FindEligibilityForSecondQuestion()
      if (isEligibleForSecondQuestion == 1){
        setFormToShow("second-question");
      }
      else{setFormToShow("not-eligible-for-second-question")}
    }
    else{
      return;
    }

  }
 
  useEffect(() => {
    const interval = setInterval(() => {
      fetch('/api/session/1', {
      method: 'GET'
      })
      .then((res) => {return res.json()})
      .then((data)=>{CheckGamePhase(data)})
      .catch(error =>{
          console.log(error);
      })
    }, 5000);
  
    return () => clearInterval(interval);
  }, []);


  //--------------------------RETURNS--------------------------------------------------

  if(formToShow === "join"){
    return (<JoinForm SetPlayerId = {SetPlayerId} SetSessionId = {SetSessionId} playerId = {playerId} sessionId = {sessionId}/>);
  }
  else if(formToShow === "first-question"){
    return (<AnswerFirstForm playerId = {playerId} sessionId = {sessionId}/>);
  }
  else if(formToShow === "second-question"){
    return (<AnswerSecondForm playerId = {playerId} sessionId = {sessionId}/>);
  }
  else if(formToShow === "not-eligible-for-second-question"){
    return(<h1>You didn't answer correct to the initial question, wait for the next question</h1>)
  }
}

export default App;
