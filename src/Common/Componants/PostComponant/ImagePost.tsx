import { Carousel, Col, Row, Image } from 'antd'
import React from 'react'

interface Params {
    listImages: string[]
}

type Props = Params 
const ImagePost: React.FC<Props> = (props: Props) => {
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };
  return (
    <>
        <Row>
            <Col span={24}>
                <Carousel afterChange={onChange}>
                    {props.listImages.map((res, i) => {
                        return <Image 
                            src={res}
                            preview={false}
                            key={i}
                            width={'100%'}
                            className='img-posted'
                        />
                    })}
                </Carousel>
            </Col>
        </Row>
    </>
  )
}

export default ImagePost