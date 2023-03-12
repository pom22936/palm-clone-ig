import { Row, Col } from 'antd'
import React from 'react'
import CostomAvatar from '../Common/Componants/CostomAvatar'

const customHerder: React.FC = () => {
    const list: string[] = ['User1', 'User2', 'User3','User4', 'User5','User6', 'User7', 'User8']
  return (
    <Row gutter={[16, 16]} align={'middle'} style={{ maxWidth: 900, paddingLeft: '10%', paddingTop: '5vh', overflow: 'hidden', height: 150}}>
        {/* Loop */}
        {list.map((res, i) => {
            return <Col span={1.5} key={i}>
                <CostomAvatar size={62} name={res} isHorizontal={false} />
            </Col>
        })}
    </Row>
  )
}

export default customHerder
