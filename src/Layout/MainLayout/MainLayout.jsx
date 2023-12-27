import Display from "../../Components/Display/Display";

const MainLayout = () => {
    return (
        <div className="flex 
        justify-center 
        items-center ">
            
            <div className="
                    
                    
                    min-h-96 
                    w-80
                    bg-white 
                    max-w-[1367px] 
                    mx-auto
                    my-32
                    
                    "

            >
                <Display />


            </div>

        </div>


    );
};

export default MainLayout;