import React from "react";
import { useState } from "react"
import { HiChevronUp } from "react-icons/hi";
import PropTypes from 'prop-types';

ProjectDetailsBox.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(
      PropTypes.shape({
        subtitle: PropTypes.string.isRequired,
        subtexts: PropTypes.arrayOf(PropTypes.string).isRequired,
      })
    ).isRequired,
  };


export function ProjectDetailsBox({title, content}){

    const [isOpenStatus, SetIsOpenStatus] = useState(false);

    function handleClick(){
        if(isOpenStatus){
            SetIsOpenStatus(false)
        } else {
            SetIsOpenStatus(true)
        }
    }

    const results = content.map((detail, index) => (
        <div
          className="flex flex-col p-5"
          key={index}
        >
          <h6>{detail.subtitle}</h6>
          <p>{detail.subtexts}</p>
        </div>
      ));

    return (
        <div className="flex md:w-4/5 md:self-center flex-col mb-1 ">
            <div 
                className="flex cursor-pointer justify-between align-middle   bg-bg_light_primary rounded-md mt-2 p-2 "
                onClick={handleClick}
            >
                <h5>{title}</h5>
                <div 
                className={`
                    flex
                    cursor-pointer
                    transition-transform duration-500 ease-in-out
                    ${isOpenStatus ? 'rotate-0' : '-rotate-180'}
                  `}
                >
                    <HiChevronUp size={32}/>
                </div>
            </div>
            <div 
            className={`
                inline-block
                overflow-y-auto
                transition-[max-height] duration-500 ease-in-out
                ${isOpenStatus ? 'max-h-[500px]' : 'max-h-0'}
              `}
            >
                <div className="bg-bg_light_primary rounded-t-sm rounded-b-md p-2 md:grid grid-cols-2">
                        {results}
                </div>  
            </div>
        </div>
    )
}

