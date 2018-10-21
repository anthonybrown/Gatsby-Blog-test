import React from "react";
import { graphql } from 'gatsby';
import Header from '../components/Header';

const Layout = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
      <div>
    <Header />
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'avenir'
    }}>
      {edges.map(edge => {
        const { frontmatter } = edge.node
        return (
          <div key={frontmatter.path}>
            {frontmatter.title}
          </div>
        )
      })}
    </div>
  </div>
  )
}

export const query = graphql `
    query HomepageQuery {
      allMarkdownRemark  {
        edges {
          node {
            frontmatter {
              title
              path
              date
            }
          }
        }
      }
    }
`

export default Layout;
