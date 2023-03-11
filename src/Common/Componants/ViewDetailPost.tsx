import { Col, Row, Typography, Image } from 'antd'
import React from 'react'
import CostomAvatar from './CostomAvatar'
import HerderPost from './PostComponant/HerderPost'
import ImagePost from './PostComponant/ImagePost'
import Hard from '../../assets/Icons/Hard.svg'

interface Params {
    listImages: string[]
}

type Props = Params 
const { Text } = Typography;
const ViewDetailPost: React.FC<Props> = (props: Props) => {
    const listComments = ['comment1', 'comment2', 'comment3'];
  return (
    <>
        <Row>
            <Col span={16}>
                <ImagePost listImages={props.listImages}/>
            </Col>
            <Col span={8} style={{ padding: 5 }}>
                <HerderPost name='Test' />
                <hr/>
                <Row gutter={[16, 16]}>
                    <Col span={24}>
                        <CostomAvatar size={48} name='test' isHorizontal={true}/>
                        <Text style={{ marginTop: 5 }}> Post Detail</Text>
                    </Col>
                </Row>
                <br/>
                {/* Loop */}
                {listComments.map((res, i) => {
                    return <Row key={i} style={{marginBottom: 10}}>
                        <Col span={23}>
                            <CostomAvatar size={48} name={'user' + (i + 1)} isHorizontal={true} />
                            <Text style={{ marginTop: 5 }}> {res}</Text>
                        </Col>
                        <Col span={1}>
                            <Image 
                                src={Hard}
                                preview={false}
                                width={12}
                            />
                        </Col>
                    </Row>
                })}
            </Col>
        </Row>
    </>
  )
}

export default ViewDetailPost