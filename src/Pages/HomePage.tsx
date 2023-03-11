import { Col, Row } from 'antd'
import React from 'react'
import Post from '../Common/Componants/Post'

const HomePage: React.FC = () => {
  return (
    <>
      <Row>
        <Col span={2} />
        <Col span={20} style={{ marginTop: '6vh', paddingLeft: '4vh', paddingRight: '45vh' }} >
          <Post />
        </Col>
        <Col span={2} />
      </Row>
    </>
  )
}

export default HomePage