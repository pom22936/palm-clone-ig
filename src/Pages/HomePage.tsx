import { Col, Row } from 'antd'
import React, { useMemo, useState } from 'react'
import Post from '../Common/Componants/Post'
import { useGetAllProductQuery } from '../Services/Dummy'
import InfiniteScroll from 'react-infinite-scroll-component';
import { products } from '../Models/Products';

const HomePage: React.FC = () => {
  const [Items, setItems] = useState<products[]>([])
  const [page, setPage] = useState(0)
  const setting = { skip: page, limit: 5}
  const { data, error, isLoading } = useGetAllProductQuery(JSON.stringify(setting))

    useMemo(() => {
        console.log(data);
        if (data) {
          const temp = [...Items, ...data.products]
          const arrayUniqueByKey = temp.filter((a, i) => temp.findIndex((s) => a.id === s.id) === i)
          setItems(arrayUniqueByKey)
        }
    }, [data, page])

    const fetchData = () => {
      setPage(page + 1)
      setting.skip = page * 5
      useGetAllProductQuery(JSON.stringify(setting))
    }

    const refresh = () => {
      setPage(0)
      setting.skip = 0
      useGetAllProductQuery(JSON.stringify(setting))
      setItems([])
    }
  return (
    <>
      <Row>
        <Col span={2} />
        <Col span={20} style={{ marginTop: '6vh', paddingLeft: '4vh', paddingRight: '25%' }} >
        <InfiniteScroll
          dataLength={Items?.length || 0} //This is important field to render the next data
          next={fetchData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          // below props only if you need pull down functionality
          refreshFunction={refresh}
          pullDownToRefresh
          pullDownToRefreshThreshold={50}
          pullDownToRefreshContent={
            <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
          }
          releaseToRefreshContent={
            <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
          }
        >
          {Items?.map((res, i) => {
            return <Post key={i} data={res} />
          })}
        </InfiniteScroll>
          
        </Col>
        <Col span={2} />
      </Row>
    </>
  )
}

export default HomePage