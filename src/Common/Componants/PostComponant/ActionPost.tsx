import { Col, Row, Image } from 'antd'
import React from 'react'
import Hard from '../../../assets/Icons/Hard.svg'
import Tags from '../../../assets/Icons/Tags.svg'
import Comment from '../../../assets/Icons/Comment.svg'
import Send from '../../../assets/Icons/Send.svg'

const ActionPost: React.FC = () => {
  return (
    <>
    <Row >
            <Col span={2}>
                <Image 
                    src={Hard}
                    preview={false}
                    width={24}
                />
            </Col>
            <Col span={2}>
                <Image 
                    src={Comment}
                    preview={false}
                    width={24}
                />
            </Col>
            <Col span={18}>
                <Image 
                    src={Send}
                    preview={false}
                    width={24}
                />
            </Col>
            <Col span={2} className='text-ending'>
                <Image 
                    src={Tags}
                    preview={false}
                    width={24}
                />
            </Col>
        </Row>
    </>
  )
}

export default ActionPost