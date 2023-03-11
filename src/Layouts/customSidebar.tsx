import { Row, Col, Typography } from 'antd'
import React from 'react'
import CostomAvatar from '../Common/Componants/CostomAvatar'

const { Text, Link } = Typography;
const customSidebar: React.FC = () => {
    const list: string[] = ['User1', 'User2', 'User3','User4', 'User5']
    const listref: string[] = ['About', 'Help', 'Press', 'API', 'Jobs', 'Privacy', 'Terms', 'Locations', 'Language', 'Meta Verified']
  return (
    <>
        <Row  gutter={[16, 16]} justify={'start'} style={{lineHeight: '120px'}}>
            <Col span={20}>
                <CostomAvatar size={62} name='test' isHorizontal={true} extra={'fullName'}/>
            </Col>
            <Col span={4}>
                <Link href="#" style={{ fontSize: 11 }}>
                    Switch
                </Link>
            </Col>
        </Row>
        <Row  gutter={[16, 16]} justify={'start'} >
            <Col span={20}>
                <Text> Suggestions for you</Text>
            </Col>
            <Col span={4}>
                <Link href="#" >
                    <Text >See all</Text>
                </Link>
            </Col>
        </Row>
        <br/>
        {/* Loop */}
        {list.map((res, i) => {
            return <Row key={i} gutter={[16, 16]} justify={'start'} style={{ marginBottom: 5 }}>
                <Col span={20}>
                    <CostomAvatar size={36} name={res} isHorizontal={true} />
                </Col>
                <Col span={4}>
                    <Link href="#" style={{ fontSize: 11 }}>
                        Follow
                    </Link>
                </Col>
            </Row>
        })}

        {/* Loop */}
        {listref.map((res, i) => {
            return <Link href="#" key={i}>
                <Text type="secondary" className='link-ref'>{res} • </Text>
            </Link>
        })}

        <br/>
        <Text type="secondary">© 2023 INSTAGRAM Clone Palm </Text>
    </>
  )
}

export default customSidebar