import { Col, Row, Typography } from 'antd'
import React, { useState } from 'react'

const { Text, Link } = Typography;
const DetailPost: React.FC = () => {
    const [ellipsis, setEllipsis] = useState(true);
    const [isSeeTransition, setIsSeeTransition] = useState(false)
    
  return (
    <>
    <Row>
            <Col span={24}><Text>91 Likes</Text></Col>
            <Col span={24}>
                <Text
                    style={ellipsis ? { width: 200 } : undefined}
                    ellipsis={ellipsis ? { tooltip: 'I am ellipsis now!' } : false}
                >
                    Ant Design, a design language for background applications, is refined by Ant UED Team. 
                </Text>
                {ellipsis ? <Link href='#' onClick={() => setEllipsis(!ellipsis)}> <Text type="secondary" > more</Text> </Link> : null}
            </Col>
            <Col span={24}>
                {!isSeeTransition ? <Text onClick={() => setIsSeeTransition(!isSeeTransition)}>See Transition</Text> : null}
            </Col>
        </Row>
    </>
  )
}

export default DetailPost