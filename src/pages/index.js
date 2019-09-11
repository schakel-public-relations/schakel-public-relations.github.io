import React from "react"
import Layout from "../components/Layout"

export default class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return <Layout>
            <div className='purple'>
                <p>
                    Website under development
                </p>
        </div>
        </Layout>
    }
}
