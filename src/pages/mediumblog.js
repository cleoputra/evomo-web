import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {Container, Row, Card} from 'react-bootstrap'


import Header from  "../components/header"
import Subscribe from "../components/subscribe"
import Footer from "../components/footer"
import favicon from '../images/icon.png'
import Helmet from 'react-helmet'


import "../styles/styles.scss"



export default function MediumBlog() {
    const data = useStaticQuery(graphql`
    query {
      allMediumPost{
        edges{
          node{
            title
            createdAt(formatString: "DD MMMM YYYY")
            uniqueSlug
        }
      }
  }
}
`)
return (
    <div>
        <Helmet>
        <link rel="icon" href={favicon} />
        </Helmet>
        
        <Header/>
            <br/>

            <Container>
                <Row className="justify-content-md-center mb3"> 
                    {data.allMediumPost.edges.map(edge => {
                        return (
                            <a 
                            href={`https://medium.com/@jeagersolution/${edge.node.uniqueSlug}`} rel="noopener noreferrer" target="_blank">
                        
                            <Card border="info" style={{ width: '48rem' }}>
                                <Card.Body>
                                    <Card.Title>{edge.node.title}</Card.Title>
                                    <Card.Text>
                                    {edge.node.createdAt}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <br/>
                            </a>
                        )
                    })}


                </Row>
            </Container>    
            
        
            <Subscribe/>
        
        <Footer/>
    </div>
       
   
  )
}
