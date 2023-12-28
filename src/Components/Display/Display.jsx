
const Display = ({num1, numberOne, result}) => {

    return (
        <div className="bg-black flex justify-center items-center w-80 h-20 rounded-t-lg">
           <h1 className="text-3xl text-warning "> {num1.length != 0 ? num1 : numberOne || numberOne.length == 0 ? result : ''}</h1>
        </div>
    );
};

export default Display;