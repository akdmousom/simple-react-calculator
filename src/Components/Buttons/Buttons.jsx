import { useEffect, useState } from "react";

const Buttons = ({ number, special, num1, setNum1, sign, setNumberOne, numberOne, setOperand, operand, setResult }) => {

    const [isCancel, setCancle] = useState(false);







    const handleButtonClick = (clickNumber) => {



        if (typeof (clickNumber) === "number") {

            setNum1([...num1, clickNumber])



        } else {



            if (typeof (clickNumber) !== "number") {


                if (clickNumber == '/' ) {

                    setNumberOne([...num1])
                    setNum1([])
                    const opa = clickNumber
                    setOperand(opa)
                } else{
                    if (clickNumber == '-' ) {

                        setNumberOne([...num1])
                        setNum1([])
                        const opa = clickNumber
                        setOperand(opa)
                    }

                    if (clickNumber == '*' ) {

                        setNumberOne([...num1])
                        setNum1([])
                        const opa = clickNumber
                        setOperand(opa)
                    }

                    if (clickNumber == '+' ) {

                        setNumberOne([...num1])
                        setNum1([])
                        const opa = clickNumber
                        setOperand(opa)
                    }
                }

                if (clickNumber == '=') {

                    if (operand == '/') {
                       
                        const numberTwo = num1.join("")
                        console.log(numberTwo);
                        const numbersIsOne = numberOne.join("")
                        console.log(numbersIsOne);
                        
                        const result = parseFloat(numbersIsOne) / parseFloat(numberTwo);
                        console.log(result);
                        setResult(result)
                        setNum1([])
                        setNumberOne([])

                        
                    } else if (operand == '-') {
                       
                        const numberTwo = num1.join("")
                        console.log(numberTwo);
                        const numbersIsOne = numberOne.join("")
                        console.log(numbersIsOne);
                        
                        const result = parseFloat(numbersIsOne) - parseFloat(numberTwo);
                        console.log(result);
                        setResult(result)
                        setNum1([])
                        setNumberOne([])
                     

                        
                    } else if (operand == '*') {
                       
                        const numberTwo = num1.join("")
                        console.log(numberTwo);
                        const numbersIsOne = numberOne.join("")
                        console.log(numbersIsOne);
                        
                        const result = parseFloat(numbersIsOne) * parseFloat(numberTwo);
                        console.log(result);
                        setResult(result)
                        setNum1([])
                        setNumberOne([])
                     

                        
                    } else if (operand == '+') {
                       
                        const numberTwo = num1.join("")
                        console.log(numberTwo);
                        const numbersIsOne = numberOne.join("")
                        console.log(numbersIsOne);
                        
                        const result = parseFloat(numbersIsOne) + parseFloat(numberTwo);
                        console.log(result);
                        setResult(result)
                        setNum1([])
                        setNumberOne([])
                     

                        
                    } 
                   
                   
                }



            }



        }




    }


    return (
        <div className="w-14 h-14 hover:bg-red-400 flex justify-center items-center mt-8 rounded-lg bg-gray-500 text-white">

            <button onClick={() => handleButtonClick(number)} className="btn"><h1 className="font-bold">{number ? number : sign || 0}</h1></button>

        </div>
    );
};

export default Buttons;