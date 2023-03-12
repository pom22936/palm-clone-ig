import { Input } from 'antd'
import React from 'react'

interface Params {
    text: string
    setText: Function
}

type Props = Params
const SearchText: React.FC<Props> = (props: Props) => {
  return (
    <>
        <div>
            <Input
                type="text"
                placeholder="ค้นหาศัพท์"
                value={props.text}
                onChange={(e) => props.setText(e.target.value)}
            />
        </div>
    </>
  )
}

export default SearchText