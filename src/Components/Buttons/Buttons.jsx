
const Buttons = (props) => {
    const {number} = props
    return (
        <div className="w-14 h-14 flex justify-center items-center mt-8 rounded-lg bg-gray-500 text-white">

            <h1 className="font-bold">{number}</h1>
            
        </div>
    );
};

export default Buttons;