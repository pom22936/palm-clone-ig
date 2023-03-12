import { Input, message, Spin, Typography } from 'antd'
import React, { useState } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { searchProduct } from '../../Services/services';
import { products } from '../../Models/Products';
import Post from './Post';

const { Text } = Typography;
const SearchSideBar: React.FC = () => {
    const [getValue, setValue] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState<products[]>([])

    const SrarchData = () => {
        setIsLoading(true)
        searchProduct(getValue).then((product) => {
          console.log(product.data.products)
          setData(product.data.products)
        }).catch(() => {
          message.error('Error loading')
        })
        .finally(() => {
          setIsLoading(false)
        })
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value) {
        setValue(e.target.value)
      } else {
        setData([])
      }
    }

  return (
    <>
        <Input size="large" placeholder="Search" onChange={(e) => onChange(e)} onPressEnter={() => SrarchData()} prefix={<SearchOutlined onClick={() => SrarchData()}/>} allowClear/>
        <hr />
        <div style={{ padding: 5 }}>
            <Text>Recent</Text>
            <br /><br/>
            <Spin spinning={isLoading}>
                {data.length !== 0 && data.map((it) => { return <Post data={it}/> })}
            </Spin>
        </div>
    </>
  )
}

export default SearchSideBar