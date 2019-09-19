import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Layout from '../components/Layout'

export default class Cases extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return <StaticQuery
            query={graphql`
        query GetAllCases {
            allMarkdownRemark(sort: {
      fields: [frontmatter___date]
      order: DESC
      }) {
                totalCount
                edges {
                    node {
                        fields {
                            slug
                        }
                        id
                        frontmatter {
                            title
                            author
                            date
                            }
                            excerpt
                        }
                    }
                }
            
        }`}
            render={data => {
                console.log(data)
                return <Layout>

                    <div className='container'>
                        <h1>Onze Cases</h1>

                        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>

                        {data.allMarkdownRemark.edges.map(({ node }) => (
                            <div className='row' key={node.id}>
                                <div onClick={event => window.location.pathname = node.fields.slug} className='col-md-12 project'>
                                    <Link to={node.fields.slug}>
                                        <h3>{node.frontmatter.title}</h3>
                                        <h5>Geschreven door <b><i>{node.frontmatter.author}</i></b> op <b><i>{node.frontmatter.date}</i></b></h5>
                                    </Link>
                                    <p>{node.excerpt}</p>
                                </div>
                            </div>
                        ))}

                    </div>


                </Layout>
            }}
        />
    }
}