import React, {useState} from "react";
import Square from "./Square";
const Board=()=>{
  const [state, setstate]=useState(Array(9).fill(null))//array with length 9 and add null in each elemnt
  const[isXturn, setIsXTurn]=useState(true);
  const checkwinner=()=>{
    const winnerLogic=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],

    ];
    for(let logic of winnerLogic){
      const[a,b,c]=logic;
      if(state[a]!==null && state[a]===state[b] && state[a]===state[c]){
        return state[a];
      }

    }
    return false;
  }
  const iswinner = checkwinner();
  const handleclick=(index)=>{
    const copyState=[...state];
    copyState[index]=isXturn? "x" : "0"
    setstate(copyState);
    setIsXTurn(!isXturn);
    // console.log("clicked on index", index)

  };
  const handlereset=()=>{
setstate(Array(9).fill(null));
  }
  console.log("state", state)
  return(
    <div className="board-container">
      {iswinner ? (
        <>{iswinner} won the game <button onClick={handlereset}>Play Again</button></>
        
      ):(<>
      <div className="board-row">
        <Square  value={state[0]} onClick={()=> handleclick(0)}/>
        <Square  value={state[1]} onClick={ ()=>handleclick(1)}/>
        <Square value={state[2]} onClick={ ()=>handleclick(2)}/>
      </div>
      <div className="board-row">
      <Square  value={state[3]} onClick={()=> handleclick(3)}/>
      <Square  value={state[4]} onClick={()=> handleclick(4)}/>
      <Square  value={state[5]} onClick={()=>handleclick(5)}/>
      </div>
      <div className="board-row">
      <Square value={state[6]} onClick={()=> handleclick(6)}/>
      <Square value={state[7]} onClick={()=> handleclick(7)}/>
      <Square value={state[8]} onClick={()=>handleclick(8)}/>
      </div> </>
    )}
    </div>
   
   )
} 
export default Board;