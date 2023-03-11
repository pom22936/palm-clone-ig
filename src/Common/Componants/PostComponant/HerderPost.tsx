import { Col, Row, Image } from 'antd'
import React from 'react'
import CostomAvatar from '../CostomAvatar'
import Detail from '../../../assets/Icons/detail.svg'

interface Parems {
    name: string
    time?: string
}

type Props = Parems
const HerderPost: React.FC<Props> = (props: Props) => {
  return (
    <Row gutter={[16, 16]} >
        <Col span={20}>
            <CostomAvatar size={48} name={props.name} isHorizontal={true} time={props.time}/>
        </Col>
        <Col span={4} style={{ paddingTop: 15, textAlign: 'end' }}>
            <Image 
                src={Detail}
                preview={false}
                width={24}
            />
        </Col>
    </Row>
  )
}

export default HerderPost