import Buttons from "../../Components/Buttons/Buttons";
import Display from "../../Components/Display/Display";

const MainLayout = () => {
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
                <Display />

            
            <div className="grid grid-cols-4  mx-7 my-4 ">
                <Buttons number={1}/>
                <Buttons number={2}/>
                <Buttons number={3}/>
                <Buttons number={4}/>
                <Buttons number={5}/>
                <Buttons number={6}/>
                <Buttons number={7}/>
                <Buttons number={8}/>
                <Buttons number={9}/>
                <Buttons number={0}/>
                <Buttons number={'+'}/>
                <Buttons number={'-'}/>
                <Buttons number={'*'}/>
                <Buttons number={'/'}/>
                <Buttons number={'='}/>
            </div>


            </div>

        </div>


    );
};

export default MainLayout;