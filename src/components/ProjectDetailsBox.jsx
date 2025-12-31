import arrow from "../assets/images/arrowUp.png"
import { useState } from "react"

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

            <div className="flex justify-between items-center bg-primaryLinear rounded-md mt-2 p-2 ">
                <h6>{title}</h6>
                <div 
                onClick={handleClick}
                style={{
                    cursor:'pointer',
                    display:'inline-block',
                    transition: 'transform 0.5s ease',
                    transform: isOpenStatus ? 'rotate(-180deg)' : 'rotate(0deg)'
                }}
                >
                    <img src={arrow} alt="boutton pour ouvrir ou fermer la modal montrant"/>
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