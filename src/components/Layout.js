import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
//import ScrollBackToTopButton from './ScrollBackToTopButton'

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
            render={
                data => <div>

                    <nav className='navbar navbar-expand-sm my-navbar'>

                        <ul className='navbar-nav'>
                            <li className='navbar-item'>
                                <Link className='nav-link' to='/#about'>Leer ons kennen</Link>
                            </li>
                            <li className='navbar-item'>
                                <Link className='nav-link' to='/cases/'>Cases</Link>
                            </li>
                            <li className='navbar-item'>
                                <Link className='nav-link' to='/#people'>Het team van {data.site.siteMetadata.title}</Link>
                            </li>
                            <li className='navbar-item'>
                                <Link className='nav-link' to='/#contact'>Contact</Link>
                            </li>
                        </ul>

                        <Link className='navbar-brand my-brand' to='/'>
                           <img className='img-logo' src='/logo.jpg' alt='logo'/>
                        </Link>

                    </nav>


                    <div className='content'>
                        {this.props.children}
                    </div>

                    {/* WORK IN PROGRESS<ScrollBackToTopButton/> */}

                </div>
            }
        />
    }
}