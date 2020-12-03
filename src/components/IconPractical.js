import React from 'react'
import { IconContext } from 'react-icons'
import { FaReact } from 'react-icons/fa'
import { MdFeedback } from 'react-icons/md'

const IconPractical = () => {
    return (
        <div>
            <IconContext.Provider value={{color: 'pink', size:'5rem'}}>
                <div>
                    <FaReact />
                    <MdFeedback />
                </div>
            </IconContext.Provider>
        </div>
    )
}

export default IconPractical
