import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container,Row, Card, Col, CardDeck} from 'react-bootstrap'


import Header from  "../components/header"
import Subscribe from "../components/subscribe"
import Footer from "../components/footer"
import favicon from '../images/icon.png'
import Helmet from 'react-helmet'
import "../styles/styles.scss"


const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMediumPost(sort: { fields: [createdAt], order: DESC }) {
        edges { 
          node {
            id
            createdAt(formatString: "DD MMMM YYYY")
            title
            uniqueSlug
            virtuals {
              subtitle
              previewImage {
                imageId
              }
            }
            author {
              name
            }
          }
        }
      }
    }
  `)
  console.log(data.allMediumPost.edges)

  return (
    <div>
    <Helmet>
    <link rel="icon" href={favicon} />
    </Helmet>
    
    <Header/>
        <br/>

        <Container>
         <Row  >
          <CardDeck className="justify-content-md-center">
              {data.allMediumPost.edges.map(edge => {
                return (
                <Col xs="4" md="auto">
                      <Card className="b-none" style={{ width: '15rem', height: '30rem',  }}>
                        <Card.Img variant="top" src={`https://cdn-images-1.medium.com/fit/c/140/120/${edge.node.virtuals.previewImage.imageId}`}
              alt={edge.node.virtuals.previewImage.imageId} />
                        <Card.Body>
                          <a href={`https://medium.com/jeager-industrial-internet-of-things/${edge.node.uniqueSlug}`} rel="noopener noreferrer" target="_blank"><Card.Title>{edge.node.title}</Card.Title></a>
                          <Card.Text>{edge.node.createdAt}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    )
                })}
              </CardDeck>                   
            </Row>
          </Container>  
        
    
        <Subscribe/>
    
    <Footer/>
</div>
  )
}

export default IndexPage
