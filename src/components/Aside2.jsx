
import MoveIcon from "@components/icons/move.astro"

//const open = clicked ? 


export function Aside2 (){
    
return(
    <div>
        <aside>
        <nav class="fixed top-0 left-0 h-screen pl-5 py-32 w-2/5 md:w-1/5 lg:w-1/5 m-0 flex flex-col justify-evenly">
            
            <button id="toggleButton" class=" md:hidden fixed top-5 left-5">
                <svg class="size-10" viewBox="0 0 24 24">
                    <MoveIcon/>
                </svg>
            </button>

            <img src="" alt="logo" class="font-bold text-lg"/>
            <a href="#About">About Me</a>
            <a href="#Experience">Experience</a>
            <a href="#Projects">My Projects</a>
            <a href="#Skills">My Skills</a>
            <a href="#Contact">Contact me</a>
        </nav>
    </aside>
    </div>
)

}

export default Aside2