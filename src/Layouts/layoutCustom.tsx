import React, { PropsWithChildren } from 'react'
import CustomHerder from './customHerder';
import Logo from '../assets/images/LogoIG.png'
import Home from '../assets/Icons/Home.svg'
import Massages from '../assets/Icons/Chat.svg'
import Notifications from '../assets/Icons/Hard.svg'
import Create from '../assets/Icons/Plus.svg'
import Explore from '../assets/Icons/Explore.svg'
import Reels from '../assets/Icons/Reels.svg'
import Search from '../assets/Icons/Search.svg'
import MenuIcon from '../assets/Icons/Menu.svg'
import User from '../assets/images/User.png'
import { Layout, Menu, Image, Space} from 'antd';
import CustomSidebar from './customSidebar';
import HomePage from '../Pages/HomePage';

const { Header, Content, Sider } = Layout;
type Props = PropsWithChildren
const siderStyle: React.CSSProperties = {
    color: '#000',
    backgroundColor: '#fff',
    zIndex: 2,
    position: 'absolute',
    top: 30,
    right: 60, 
    minWidth: 350
  };
const layoutCustom: React.FC = (props: Props) => {
    const listMenu: string[] = ['Home', 'Search', 'Explore', 'Reels', 'Massages', 'Notifications', 'Create', 'Profile']
    const listImage = [Home, Search, Explore, Reels, Massages, Notifications, Create, User]
  return (
    <>
        <Layout style={{ minHeight:"100vh" , background: '#ffffff' }}>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
                }}
                theme='light'
                width={240}
                className='main-sidebar'
            >
                <div className='pd5' style={{position: 'fixed'}}>
                    <div style={{ margin: '3.5vh 2.7vh 4vh' }}>
                        <Image
                            width={100}
                            src={Logo}
                            preview={false}
                        />
                    </div>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={listMenu.map(
                            (data, index) => ({
                                key: String(index + 1),
                                icon: <Image src={listImage[index]} preview={false} width={24} style={{paddingTop: 10}}/>,
                                label: <span style={{ paddingLeft: 15, fontSize: 18, fontWeight: 400 }}>{data}</span>,
                            }),
                        )}
                    />
                    <div style={{ position: 'fixed', bottom: 30 }}>
                        <Menu
                            mode="inline"
                            items={['More'].map(
                                (data, index) => ({
                                    key: String(index + 1),
                                    icon: <Image src={MenuIcon} preview={false} width={24} style={{paddingTop: 10}}/>,
                                    label: <span style={{ paddingLeft: 15, fontSize: 18, fontWeight: 400 }}>{data}</span>,
                                }),
                            )}
                        />
                    </div>
                </div>
            </Sider>
            <Layout>
                <Header style={{ padding: 0 }} >
                    <CustomHerder />
                </Header>
                <Content style={{ margin: '24px 16px 0', background: '#ffffff' }}>
                    <div style={{ padding: 24, minHeight: 360 }}>
                        {/* {props.children} */}
                        <HomePage />
                    </div>
                    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
                        <Layout>
                            <Content style={{ zIndex: -1 }}></Content>
                            <Sider style={siderStyle} width={350}>
                                <CustomSidebar />
                            </Sider>
                        </Layout>
                    </Space>
                </Content>
                {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer> */}
            </Layout>
        </Layout>
    </>
  )
}

export default layoutCustom
