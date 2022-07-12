import React from 'react'
import Sidebar from '../components/Sidebar'
import {Grid,Col,Row} from 'rsuite'
const Home = () => {
  return (
      <Grid fluid className="h-100">
        <Row className="h-100">
          <Col xs={24} md={8} className="h-100">
              <Sidebar/>
          </Col>
        </Row>
      </Grid>
  )
}

export default Home