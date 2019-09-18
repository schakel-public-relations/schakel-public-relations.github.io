import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export default class Case extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const post = this.props.data.markdownRemark
    return <Layout>
      <div>
        <p className='case-title underline'>
          <h1>{post.frontmatter.title}</h1>
          <h5>Geschreven door <i>{post.frontmatter.author}</i> op <i>{post.frontmatter.date}</i></h5>
        </p>

        <div className='post' dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  }
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        date
      }
    }
  }
`