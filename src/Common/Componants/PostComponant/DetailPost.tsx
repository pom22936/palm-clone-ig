import { Col, Row, Typography } from 'antd'
import React, { useContext, useState } from 'react'
import { LikeContext } from '../../../Services/Context/LikeContext';

const { Text, Link } = Typography;

interface Params {
    descriptions: string
    initLike: number
}

type Props = Params 
const DetailPost: React.FC<Props> = (props: Props) => {
    const { LikeState } = useContext<any>(LikeContext)
    const [ellipsis, setEllipsis] = useState(true);
    const [isSeeTransition, setIsSeeTransition] = useState(false)
    
  return (
    <>
        <Row>
            <Col span={24}><Text>{((props.initLike || 0) + (LikeState.length || 0))} Likes</Text></Col>
            <Col span={24}>
                <Text
                    style={ellipsis ? { width: 200 } : undefined}
                    ellipsis={ellipsis ? { tooltip: 'I am ellipsis now!' } : false}
                >
                    {props.descriptions}
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