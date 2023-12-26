"use client"

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StyledComponentsRegistry from '../lib/AntdRegistry'
import { Input, Layout, Icon, Avatar } from 'antd'
import { Children, useCallback, useState } from 'react'
import { GithubOutlined, UserOutlined } from '@ant-design/icons';
import Container from '../components/Container'

const { Header, Content, Footer } = Layout
const { Search } = Input;

const inter = Inter({ subsets: ['latin'] })

//export const metadata: Metadata = {
//  title: 'Create  Next App',
//  description: 'Generated by create next app',
//}

const githubIconStyle = {
  color: 'white',
  fontSize: 40,
  display: 'block',
  paddingTop: 10,
  marginRight: 10
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [search, SetSearch] = useState('')
  const handleSearchChange = useCallback((event) => {
    SetSearch(event.target.value)
  }, [SetSearch],)

  const handleOnSearch = useCallback(() => { }, [])

  return (
    <html lang="en">
      <body className='w-full'>
        <StyledComponentsRegistry>
          <Layout>
            <Header style={{ paddingLeft: 0, paddingRight: 0 }}>
              <Container renderer={<div className='flex px-5 py-1 justify-between content-between' />}>
                <div className='flex w-100'>
                  <div className='w-20 justify-center'>
                    <GithubOutlined style={githubIconStyle} />
                  </div>
                  <div className='flex'>
                    <Search style={{ paddingTop: 15, width: 400 }} placeholder='search github' value={search} onChange={handleSearchChange} onSearch={handleOnSearch} />
                  </div>
                </div>
                <div className='flex content-center w-20'>
                  <Avatar size='large' icon={<UserOutlined />} />
                </div>
              </Container>
            </Header >
            <Content className='h-svh place-content-center'>
              <Container>
                {children}
              </Container>
            </Content>
            <Footer>
              <div className='text-base text-center text-cyan-400'>
                Developed by Yongjun Wang @
                <a href='mailto: wangyj641@gmail.com'>wangyj641@gmail.com</a>
              </div>
            </Footer>
          </Layout>
        </StyledComponentsRegistry>
      </body>
    </html >
  )
}
