import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return <StaticQuery
            query={graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
        `}
            render={data => <div className='container'>
                <ul className='sample-nav'>
                    <li><Link to='/'>Leer ons kennen</Link></li>
                    <li><Link to='/cases/'>Cases</Link></li>
                    <li><Link to='/'>Onze mensen</Link></li>
                    <li><Link to='/'>Contact</Link></li>
                </ul>
                <Link to='/'>
                    <h1 className='header'>{data.site.siteMetadata.title}</h1>
                </Link>

                <div className='content'>
                    {this.props.children}
                </div>

            </div>}
        />
    }
}