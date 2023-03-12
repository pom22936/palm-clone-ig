import { Carousel, Col, Row, Image } from 'antd'
import React, { useRef } from 'react'
import Hard from '../../../assets/Icons/heart-red.svg'
interface Params {
    listImages: string[]
}

type Props = Params 
const ImagePost: React.FC<Props> = (props: Props) => {
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