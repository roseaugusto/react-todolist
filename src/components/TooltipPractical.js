import React from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

const ColoredTooltip = () => {
    return <span style={{color:'yellow'}} >Colored me</span>
}

function TooltipPractical() {
    return (
        <div>
            <Tippy placement="bottom" content={<ColoredTooltip></ColoredTooltip>}>
                <button>Hover</button>
            </Tippy>
        </div>
    )
}

export default TooltipPractical
