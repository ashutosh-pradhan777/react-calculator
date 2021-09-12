import { useState } from "react";
import "./Calculator.css"

const Calculator = () => {

    const [input,setInput] = useState("");

   const handleClick = (str) => 
   {
    setInput(input + str);
   }

   const clear = () => 
   {
       setInput("");
   }

   const calculate = () => {
       try{
       var res = eval(input);
       setInput(res);
    }
    catch(e)
    {
        setInput("Invalid Expression")
    }
   }

    return ( 
        <div className="mainDiv">
            <h2>THE CALCULATOR APP</h2><br /><br />
            <table className = "calculator">
                <tbody>
 <tr>
 <td colSpan = "3"> <input className = "display-box" type = "text" id = "result" value={input} disabled /> </td>
 <td> <input className = "op" type = "button" value = "C" onClick = {clear}  /> </td>
 </tr>
 <tr>

 <td> <input className = "num" type = "button" value = "1" onClick = {() => {handleClick("1")}} /> </td>
 <td> <input className = "num" type = "button" value = "2" onClick = {() => {handleClick("2")}}/> </td>
 <td> <input className = "num" type = "button" value = "3" onClick = {() => {handleClick("3")}} /> </td>
 <td> <input className = "op" type = "button" value = "/" onClick = {() => {handleClick("/")}} /> </td>
 </tr>
 <tr>
 <td> <input className = "num" type = "button" value = "4" onClick = {() => {handleClick("4")}} /> </td>
 <td> <input className = "num" type = "button" value = "5" onClick = {() => {handleClick("5")}} /> </td>
 <td> <input className = "num" type = "button" value = "6" onClick = {() => {handleClick("6")}} /> </td>
 <td> <input className = "op" type = "button" value = "-" onClick = {() => {handleClick("-")}} /> </td>
 </tr>
 <tr>
 <td> <input className = "num" type = "button" value = "7" onClick = {() => {handleClick("7")}} /> </td>
 <td> <input className = "num" type = "button" value = "8" onClick = {() => {handleClick("8")}} /> </td>
 <td> <input className = "num" type = "button" value = "9" onClick = {() => {handleClick("9")}} /> </td>
 <td> <input className = "op" type = "button" value = "+" onClick = {() => {handleClick("+")}} /> </td>
 </tr>
 <tr>
 <td> <input className = "op" type = "button" value = "." onClick = {() => {handleClick(".")}} /> </td>
 <td> <input className = "num" type = "button" value = "0" onClick = {() => {handleClick("0")}}/> </td>
 <td> <input className = "op" type = "button" value = "=" onClick={calculate} /> </td>
 <td> <input className = "op" type = "button" value = "*" onClick = {() => {handleClick("*")}} /> </td>
 </tr>
 </tbody>
 </table>
        </div>
     );
}
 
export default Calculator;