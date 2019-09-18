import React from "react"

export default class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.state = { visible: false }
    }

    changeVisibility() {
        this.setState({ ...this.state, visible: !this.state.visible })
    }

    render() {
        if (this.state.visible) {
            return <div bb onClick={event => this.changeVisibility()}>
                {this.props.children}
                <abbr title='Click text to hide'><i>Verberg</i></abbr>
            </div>

        }
        return <button onClick={event => this.changeVisibility()} className='btn btn-warning'>{this.props.openText}</button>
    }
}