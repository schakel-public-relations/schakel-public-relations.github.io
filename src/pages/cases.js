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
            allMarkdownRemark {
                totalCount
                edges {
                    node {
                        fields {
                            slug
                        }
                        id
                        frontmatter {
                            title
                            }
                            excerpt
                        }
                    }
                }
            
        }`}
            render={data => {
                console.log(data)
                return <Layout>
                    <h1>Onze Cases</h1>
                    <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
                    {data.allMarkdownRemark.edges.map(({ node }) => (
                        <div key={node.id}>
                            <Link to={node.fields.slug}>
                                <h3>
                                    {node.frontmatter.title}{" "}
                                    <span>
                                        {/* — {node.frontmatter.date} */}
                                    </span>
                                </h3>
                            </Link>
                            <p>{node.excerpt}</p>
                        </div>
                    ))}
                </Layout>
            }}
        />
    }
}