import { Carousel, Col, Row, Image } from 'antd'
import React, { useContext, useRef } from 'react'
import Hard from '../../../assets/Icons/heart-red.svg'
import { LikeContext } from '../../../Services/Context/LikeContext'
interface Params {
    listImages: string[]
    postId: string
}

type Props = Params 
const ImagePost: React.FC<Props> = (props: Props) => {
    const { AddLike } = useContext<any>(LikeContext)
    const ref = useRef<any>(null)
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };

    const HandleDabbleCleck = () => {
        var slideSource = document.getElementById('slideSource')
        if (slideSource) {
            slideSource.classList.toggle('fade');
            setTimeout(() => {
                if (slideSource) {
                    slideSource.classList.toggle('fade')
                }
            }, 1000);
            if (AddLike) {
                AddLike(props.postId)
            }
        }
    }

  return (
    <>
        <Row>
            <Col span={24} ref={ref} onDoubleClick={HandleDabbleCleck} >
                <img id='slideSource' src={Hard} />
                <Carousel afterChange={onChange} dots={true} >
                    {props.listImages.map((res, i) => {
                        return <div key={i}>
                                <Image 
                                    src={res}
                                    preview={false}
                                    width={'100%'}
                                    height={'100%'}
                                    style={{ position: 'inherit' }}
                                    className='img-posted'
                                />
                            </div>
                    })}
                </Carousel>
            </Col>
        </Row>
    </>
  )
}

export default ImagePost