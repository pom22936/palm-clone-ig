import { Avatar, Typography, Space, Row, Col } from 'antd'
import React from 'react'
import { UserOutlined } from '@ant-design/icons';

interface parem {
    size: number;
    name: string;
    isHorizontal: boolean
    time?: string;
    extra?: string;
}

type Props = parem
const { Text } = Typography;
const CostomAvatar: React.FC<Props> = (props: Props) => {
  return (
    <Space direction={props.isHorizontal ? 'horizontal' : 'vertical'}>
        <Avatar className='custom-avatar' size={props.size} icon={<UserOutlined />} />
        {props.extra ? <Row>
          <Col span={24}>
            <Text style={{ display: 'block'}}>{props.name}</Text>
          </Col>
          <Col span={24}>
            <Text type="secondary" style={{ display: 'block'}}> {props.extra}</Text>
          </Col>
        </Row> : <Text style={{ display: 'block', fontSize: 16, fontWeight: 500}}>{props.name}</Text>}
        {props.time && <Text type="secondary" > • {props.time}</Text>}
    </Space>
  )
}

export default CostomAvatar