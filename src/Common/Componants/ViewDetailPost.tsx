import { Col, Row, Typography, Image, Input, Modal, message } from 'antd'
import React, { useMemo, useState } from 'react'
import CostomAvatar from './CostomAvatar'
import HerderPost from './PostComponant/HerderPost'
import ImagePost from './PostComponant/ImagePost'
import Hard from '../../assets/Icons/Hard.svg'
import { createComment, deleteComment, getAllComments, updateComment } from '../../Services/myService'
import { Comments } from '../../Models/Comments'
import { SmileOutlined, EditOutlined, DeleteOutlined, ExclamationCircleFilled } from '@ant-design/icons';

interface Params {
    listImages: string[]
    title: string
    description: string
}

type Props = Params 
const { Text } = Typography;
const { confirm } = Modal;
const ViewDetailPost: React.FC<Props> = (props: Props) => {
    const [data, setData] = useState<Comments[]>([])
    const [comment, setComment] = useState('')
    const [isEdit, setIsEdit] = useState(false)
    const [idComment, setIdComment] = useState<number>()

    useMemo(() => {
        getAllComments().then((comments) => {
            console.log(comments)
            setData(comments.data)
        })
    }, [])

    const Submit = () => {
        const convertData: Comments = {
            author: 'User',
            body: comment,
            postId: '1'
        }
        if (comment.trim() !== '') {
            if (isEdit && idComment) {
                updateComment(idComment, convertData).then((res) => {
                    const updateData = data.find((data) => data.id === idComment)
                    if (updateData) {
                        message.success('Update Comments Success')
                        updateData.body = comment
                    }
                }).finally(() => {
                    setComment('')
                    setIsEdit(false)
                    setIdComment(undefined)
                })
            } else {
                createComment(convertData).then((comments) => {
                    data.push(comments.data)
                }).finally(() => {
                    setComment('')
                })
            }
        }
    }

    const handleEditComment = (res: Comments) => {
        setComment(res.body)
        setIsEdit(true)
        setIdComment(res.id)
    }

    const showConfirm = (id: number) => {
        confirm({
          title: 'Do you Want to delete these items?',
          icon: <ExclamationCircleFilled />,
          content: 'delete items?',
          onOk() {
            deleteComment(id).then(() => {
                message.success('Delete Comments Success')
                const filterData = data.filter((it) => it.id !== id)
                setData(filterData)
            })
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      };

  return (
    <>
        <Row>
            <Col span={16}>
                <ImagePost listImages={props.listImages}/>
            </Col>
            <Col span={8} style={{ padding: 5 }}>
                <HerderPost name={props.title} />
                <hr/>
                <Row gutter={[16, 16]}>
                    <Col span={24}>
                        <CostomAvatar size={48} name={props.title} isHorizontal={true}/>
                        <Text style={{ marginTop: 5 }}> {props.description}</Text>
                    </Col>
                </Row>
                <br/>
                {/* Loop */}
                {data.map((res, i) => {
                    return <Row key={i} style={{marginBottom: 10}} gutter={[16, 16]}>
                        <Col span={21}>
                            <CostomAvatar size={48} name={res.author} isHorizontal={true} />
                            <Text style={{ marginTop: 5 }}> {res.body}</Text>
                        </Col>
                        <Col span={1}>
                            <EditOutlined style={{ color: idComment === res.id ? 'red' : ''}} onClick={() => handleEditComment(res)} />
                        </Col>
                        <Col span={1}>
                            <DeleteOutlined onClick={() => showConfirm(res.id!!)}/>
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
                <Row>
                    <Col span={24} style={{ borderBottom: '1px solid #cccccc'}}>
                        <Input placeholder="Add a Comment..." bordered={false} value={comment} onChange={(e) => setComment(e.target.value)} onPressEnter={() => Submit()} suffix={
                            <SmileOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                        }/>
                    </Col>
                </Row>
            </Col>
        </Row>
    </>
  )
}

export default ViewDetailPost