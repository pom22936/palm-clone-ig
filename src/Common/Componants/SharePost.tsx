import { Button, Col, Input, Row, Typography } from 'antd'
import React, { useMemo, useState } from 'react'
import { Comments } from '../../Models/Comments';
import { getAllComments } from '../../Services/myService';
import CostomAvatar from './CostomAvatar';

interface Params {

}

type Props = Params
const { Text, Title } = Typography;
const SharePost: React.FC<Props> = (props: Props) =>  {
    const [data, setData] = useState<Comments[]>([])

    useMemo(() => {
        getAllComments().then((comments) => {
            setData(comments.data)
        })
    }, [])

  return (
    <>
        <Row align={'middle'} justify={'center'}>
            <Col span={24} style={{textAlign: 'center'}}>
                <Title level={5}> Share </Title>
            </Col>
        </Row>
        <hr />
        <Row gutter={[16, 16]}>
            <Col span={1}>
                <Text> To </Text>
            </Col>
            <Col span={23}>
                <Input placeholder="Search..." bordered={false} />
            </Col>
        </Row>
        <hr />
        <div style={{padding: 10}}>
            <Text> Suggested </Text>
            <br/><br/>
            {data.map((res, i) => {
                    return <Row key={i} style={{marginBottom: 10}} gutter={[16, 16]}>
                        <Col span={23}>
                            <CostomAvatar size={48} name={res.author} isHorizontal={true} />
                            <Text style={{ marginTop: 5 }}> {res.body}</Text>
                        </Col>
                        <Col span={1}>
                            
                        </Col>
                    </Row>
                })}
        </div>
        <hr />
        <div style={{padding: 5}}>
            <Button type='primary' style={{ width: '100%'}}>Send</Button>
        </div>
    </>
  )
}

export default SharePost