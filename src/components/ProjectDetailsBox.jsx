import arrow from "../assets/images/arrowUp.png"
import { useState } from "react"
import { HiChevronUp } from "react-icons/hi";


export function ProjectDetailsBox({title, content}){

    const [isOpenStatus, SetIsOpenStatus] = useState(false);

    function handleClick(){
        if(isOpenStatus){
            SetIsOpenStatus(false)
        } else {
            SetIsOpenStatus(true)
        }
    }

    let results = []
    for(let i=0; i<content.length; i++){
        results.push(
            <li key={"content"+i}>{content[i]}</li>
        )
    }


    return (
        <div className="flex flex-col mb-1">

            <div className="flex justify-between items-center  bg-bg_light_primary rounded-md mt-2 p-2 ">
                <h6>{title}</h6>
                <div 
                onClick={handleClick}
                style={{
                    cursor:'pointer',
                    display:'inline-block',
                    transition: 'transform 0.5s ease',
                    transform: isOpenStatus ? 'rotate(0deg)' : 'rotate(-180deg)'
                }}
                >
                    <HiChevronUp />
                </div>
            </div>


            <div 
            style={{
                display:'inline-block',
                transition: 'max-height 0.5s ease',  
                maxHeight: isOpenStatus ? '500px' : '0px',
                overflow: 'hidden',
            }} 
            >
                <div className="bg-bg_light_primary rounded-t-sm rounded-b-md p-2">
                    <ul className="list-disc list-inside">
                        {results}
                    </ul>
                </div>  
            </div>
        </div>

    )
}