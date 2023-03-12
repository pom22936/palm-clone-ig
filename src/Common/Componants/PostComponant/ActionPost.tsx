import { Col, Row, Image, Tooltip, Modal } from 'antd'
import React, { useContext, useEffect, useState } from 'react'
import Hard from '../../../assets/Icons/Hard.svg'
import Hardred from '../../../assets/Icons/heart-red.svg'
import Tags from '../../../assets/Icons/Tags.svg'
import Comment from '../../../assets/Icons/Comment.svg'
import Send from '../../../assets/Icons/Send.svg'
import { LikeContext } from '../../../Services/Context/LikeContext'
import SharePost from '../SharePost'
interface Params {
    postId: string
    openModal: Function
}

type Props = Params 
const ActionPost: React.FC<Props> = (props: Props) => {
    const { LikeState, AddLike } = useContext<any>(LikeContext)
    const [listId, setListId] = useState<string[]>([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    
    const handleCancel = () => {
        setIsModalOpen(false)
    }

    useEffect(() => {
        setListId(LikeState)
    }, [LikeState])

    const handleClick = () => {
        if (AddLike) {
            AddLike(props.postId)
        }
    }

  return (
    <>
        <Row >
            <Col span={2}>
                <Image 
                    src={listId.includes(props.postId) ? Hardred : Hard}
                    preview={false}
                    width={24}
                    className="ActionPostIcons"
                    onClick={handleClick}
                />
            </Col>
            <Col span={2}>
                <Image 
                    src={Comment}
                    preview={false}
                    width={24}
                    className="ActionPostIcons"
                    onClick={() => props.openModal(true)}
                />
            </Col>
            <Col span={18}>
                <Image 
                    src={Send}
                    preview={false}
                    width={24}
                    className="ActionPostIcons"
                    onClick={() => setIsModalOpen(true)}
                />
            </Col>
            <Col span={2} className='text-ending'>
                <Tooltip title="Collections">
                    <Image 
                        src={Tags}
                        preview={false}
                        width={24}
                        className="ActionPostIcons"
                    />
                </Tooltip>
            </Col>
            <Modal title="" open={isModalOpen} onCancel={handleCancel} footer={null} width={'50%'}>
                <SharePost />
            </Modal>
        </Row>
    </>
  )
}

export default ActionPost