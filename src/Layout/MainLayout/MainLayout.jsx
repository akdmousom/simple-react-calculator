import { useState } from "react";
import Buttons from "../../Components/Buttons/Buttons";
import Display from "../../Components/Display/Display";

const MainLayout = () => {

    const [displayNumber, setDisplayNumber] = useState()
    const [num1, setNum1] = useState([]);


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
                <Display num1={num1} />

            
            <div className="grid grid-cols-4  mx-7 my-4 ">
                <Buttons num1 = {num1} setNum1 ={setNum1}  setDisplayNumber={setDisplayNumber} number={1}/>
                <Buttons num1 = {num1} setNum1 ={setNum1}  setDisplayNumber={setDisplayNumber} number={2}/>
                <Buttons num1 = {num1} setNum1 ={setNum1}  setDisplayNumber={setDisplayNumber} number={3}/>
                <Buttons num1 = {num1} setNum1 ={setNum1}  setDisplayNumber={setDisplayNumber} number={4}/>
                <Buttons num1 = {num1} setNum1 ={setNum1}  setDisplayNumber={setDisplayNumber} number={5}/>
                <Buttons num1 = {num1} setNum1 ={setNum1}  setDisplayNumber={setDisplayNumber} number={6}/>
                <Buttons num1 = {num1} setNum1 ={setNum1}  setDisplayNumber={setDisplayNumber} number={7}/>
                <Buttons num1 = {num1} setNum1 ={setNum1}  setDisplayNumber={setDisplayNumber} number={8}/>
                <Buttons num1 = {num1} setNum1 ={setNum1}  setDisplayNumber={setDisplayNumber} number={9}/>
                <Buttons num1 = {num1} setNum1 ={setNum1}  setDisplayNumber={setDisplayNumber} number={0} special={0}/>
                <Buttons sign={'+'}/>
                <Buttons sign={'-'}/>
                <Buttons sign={'*'}/>
                <Buttons sign={'/'}/>
                <Buttons sign={'='}/>
                <Buttons sign={'C'}/>
            </div>


            </div>

        </div>


    );
};

export default MainLayout;