import React from 'react'
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"

library.add(faArrowUp)

export default class ScrollBackToTopButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return <button 
 
        onClick={event => document.documentElement.scrollTop = 0} 
        className='scroll-top'
        >
            <FontAwesomeIcon icon={['fas', 'arrow-up']}/>
        </button>
    }
}