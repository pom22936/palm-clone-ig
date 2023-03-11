import { Row, Col, Typography, Input, Modal } from 'antd'
import React, { useState } from 'react'
import Example1 from '../../assets/images/Example1.jpg'
import Example2 from '../../assets/images/Example2.jpg'
import Example3 from '../../assets/images/Example3.jpg'
import { SmileOutlined } from '@ant-design/icons';
import ViewDetailPost from './ViewDetailPost'
import HerderPost from './PostComponant/HerderPost'
import ImagePost from './PostComponant/ImagePost'
import ActionPost from './PostComponant/ActionPost'
import DetailPost from './PostComponant/DetailPost'

const { Text, Link } = Typography;
const Post: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const listImages = [Example1, Example2, Example3]
    
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    
  return (
    <>
        {/* herder post */}
        <HerderPost name='Test' time='16 h'/>
        <br/>
        {/* Imgage post */}
        <ImagePost listImages={listImages}/>
        <br/>
        {/* Action Post */}
        <ActionPost />
        <br/>
        {/* detail post */}
        <DetailPost />
        {/* comment */}
        <Row>
            <Col span={24}>
                <Link href='#' onClick={() => setIsModalOpen(true)}><Text type="secondary">View All 68 comment</Text></Link>
            </Col>
            <Col span={24} style={{ borderBottom: '1px solid #cccccc'}}>
                <Input placeholder="Add a Comment..." bordered={false} suffix={
                    <SmileOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                }/>
            </Col>
        </Row>
        <Modal title="" open={isModalOpen} onCancel={handleCancel} footer={null} width={'80%'}>
            <ViewDetailPost listImages={listImages}/>
        </Modal>
    </>
  )
}

export default Post