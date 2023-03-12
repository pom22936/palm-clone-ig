import { Row, Col, Typography, Input, Modal } from 'antd'
import React, { useState } from 'react'
import { SmileOutlined } from '@ant-design/icons';
import ViewDetailPost from './ViewDetailPost'
import HerderPost from './PostComponant/HerderPost'
import ImagePost from './PostComponant/ImagePost'
import ActionPost from './PostComponant/ActionPost'
import DetailPost from './PostComponant/DetailPost'
import { products } from '../../Models/Products'

const { Text, Link } = Typography;

interface Params {
    data: products
}

type Props = Params
const Post: React.FC<Props> = (props: Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    
  return (
    <>
        {/* herder post */}
        <HerderPost name={props.data.title} time='16 h'/>
        <br/>
        {/* Imgage post */}
        <ImagePost listImages={props.data.images}/>
        <br/>
        {/* Action Post */}
        <ActionPost />
        <br/>
        {/* detail post */}
        <DetailPost />
        {/* comment */}
        <Row>
            <Col span={24}>
                <Link href='#' onClick={() => setIsModalOpen(true)}><Text type="secondary">View All 3 comment</Text></Link>
            </Col>
            <Col span={24} style={{ borderBottom: '1px solid #cccccc'}}>
                <Input placeholder="Add a Comment..." bordered={false} suffix={
                    <SmileOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                }/>
            </Col>
        </Row>
        <br/>
        <Modal title="" open={isModalOpen} onCancel={handleCancel} footer={null} width={'80%'}>
            <ViewDetailPost listImages={props.data.images} title={props.data.title} description={props.data.description}/>
        </Modal>
    </>
  )
}

export default Post