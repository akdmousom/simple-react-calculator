import { useEffect, useState } from "react";

const Buttons = ({ number, special, num1, setNum1, sign }) => {

    const [clickNum, setClickNum] = useState();




    const handleButtonClick = (clickNumber) => {

        setClickNum(clickNumber)

        setNum1([...num1, clickNumber])
        
    }


    return (
        <div className="w-14 h-14 hover:bg-red-400 flex justify-center items-center mt-8 rounded-lg bg-gray-500 text-white">

            <button onClick={() => handleButtonClick(number)} className="btn"><h1 className="font-bold">{number ? number : sign || 0}</h1></button>

        </div>
    );
};

export default Buttons;