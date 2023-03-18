import './App.css';
import { useState } from "react";
import TicTacToe from "./TicTacToe"

function App() {
  const [ticTacToe, setTicToe] = useState(["1", "2", "3", "4", "5", "6", "7", "8", "9"])
  const[score1,setScore1]=useState(0)
  const[score2,setScore2]=useState(0)
  const incrementScoreandReset=(score)=>{
    if(score==="reset")
    {
      setScore1(0)
      setScore2(0)
    }
    else if(score==="score1")
    {
      setScore1(score1+1)
    }
    else{
      setScore2(score2+1)
    }
  }
  return (
    <div className="App" style={{display:"flex",height:"100vh",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
      <div style={{backgroundColor:"white",width:"20vw",height:"8vh",display:"flex",alignItems:"center",justifyContent:"space-around",marginBottom:"5vh",borderRadius:"20px"}}>
        <span style={{color:"red",display:"inline-block",margin:"10px",fontSize:"28px",fontWeight:"600"}}>X-{score1}</span>
        <span style={{color:"blue",display:"inline-block",margin:"10px",fontSize:"28px",fontWeight:"600"}}>O-{score2}</span>
      </div>
      <TicTacToe ticTacToe={ticTacToe}  increment={incrementScoreandReset}/>
    </div>
  );
}

export default App;
