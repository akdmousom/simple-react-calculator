import { useState } from "react";
import Buttons from "../../Components/Buttons/Buttons";
import Display from "../../Components/Display/Display";

const MainLayout = () => {

    const [displayNumber, setDisplayNumber] = useState()
    const [num1, setNum1] = useState([]);

    const [numberOne, setNumberOne] = useState([])
    const [numberTwo, setNumberTwo] = useState([])
    const [operand, setOperand] = useState('')

    const [result, setResult] = useState();

    


    return (
        <div className="flex 
        justify-center 
        items-center ">
            
            <div className="
                    
                    rounded-lg
                    min-h-96 
                    w-80
                    bg-white 
                    max-w-[1367px] 
                    mx-auto
                    my-32
                    
                    "

            >
                <Display result={result} numberOne={numberOne} num1={num1} />

            
            <div className="grid grid-cols-4  mx-7 my-4 ">
                <Buttons setNumberOne={setNumberOne} setResult={setResult} setOperand={setOperand} operand={operand} numberOne={numberOne} num1 = {num1} setNum1 ={setNum1}  setDisplayNumber={setDisplayNumber} number={1}/>
                <Buttons setNumberOne={setNumberOne} setResult={setResult} setOperand={setOperand} operand={operand} numberOne={numberOne} num1 = {num1} setNum1 ={setNum1}  setDisplayNumber={setDisplayNumber} number={2}/>
                <Buttons setNumberOne={setNumberOne} setResult={setResult} setOperand={setOperand} operand={operand} numberOne={numberOne} num1 = {num1} setNum1 ={setNum1}  setDisplayNumber={setDisplayNumber} number={3}/>
                <Buttons setNumberOne={setNumberOne} setResult={setResult} setOperand={setOperand} operand={operand} numberOne={numberOne} num1 = {num1} setNum1 ={setNum1}  setDisplayNumber={setDisplayNumber} number={4}/>
                <Buttons setNumberOne={setNumberOne} setResult={setResult} setOperand={setOperand} operand={operand} numberOne={numberOne} num1 = {num1} setNum1 ={setNum1}  setDisplayNumber={setDisplayNumber} number={5}/>
                <Buttons setNumberOne={setNumberOne} setResult={setResult} setOperand={setOperand} operand={operand} numberOne={numberOne} num1 = {num1} setNum1 ={setNum1}  setDisplayNumber={setDisplayNumber} number={6}/>
                <Buttons setNumberOne={setNumberOne} setResult={setResult} setOperand={setOperand} operand={operand} numberOne={numberOne} num1 = {num1} setNum1 ={setNum1}  setDisplayNumber={setDisplayNumber} number={7}/>
                <Buttons setNumberOne={setNumberOne} setResult={setResult} setOperand={setOperand} operand={operand} numberOne={numberOne} num1 = {num1} setNum1 ={setNum1}  setDisplayNumber={setDisplayNumber} number={8}/>
                <Buttons setNumberOne={setNumberOne} setResult={setResult} setOperand={setOperand} operand={operand} numberOne={numberOne} num1 = {num1} setNum1 ={setNum1}  setDisplayNumber={setDisplayNumber} number={9}/>
                <Buttons setNumberOne={setNumberOne} setResult={setResult} setOperand={setOperand} operand={operand} numberOne={numberOne} num1 = {num1} setNum1 ={setNum1}  setDisplayNumber={setDisplayNumber} number={0} special={0}/>
                <Buttons setNumberOne={setNumberOne} setResult={setResult} setOperand={setOperand} operand={operand} numberOne={numberOne} num1 = {num1} setNum1 ={setNum1} number={'+'}/>
                <Buttons setNumberOne={setNumberOne} setResult={setResult} setOperand={setOperand} operand={operand} numberOne={numberOne} num1 = {num1} setNum1 ={setNum1} number={'-'}/>
                <Buttons setNumberOne={setNumberOne} setResult={setResult} setOperand={setOperand} operand={operand} numberOne={numberOne} num1 = {num1} setNum1 ={setNum1} number={'*'}/>
                <Buttons setNumberOne={setNumberOne} setResult={setResult} setOperand={setOperand} operand={operand} numberOne={numberOne} num1 = {num1} setNum1 ={setNum1} number={'/'}/>
                <Buttons setNumberOne={setNumberOne} setResult={setResult} setOperand={setOperand} operand={operand} numberOne={numberOne} num1 = {num1} setNum1 ={setNum1} number={'='}/>
                <Buttons setNumberOne={setNumberOne} setResult={setResult} setOperand={setOperand} operand={operand} numberOne={numberOne} num1 = {num1} setNum1 ={setNum1} number={'C'}/>
            </div>


            </div>

        </div>


    );
};

export default MainLayout;