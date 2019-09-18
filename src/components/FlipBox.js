import React from "react"

export default class FlipBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return <div className='flip-box'>
        <div className='flip-box-inner'>

            <div className='flip-box-front'>
                {this.props.children}
            </div>

            <div className='flip-box-back'>
                <img className="profile-img" src={this.props.backImg} alt="back" />
            </div>

        </div>
    </div>
    }
}