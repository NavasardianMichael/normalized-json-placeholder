import React from 'react'
import { Flex, Layout, Spin } from 'antd'
import { Tabs } from 'components/content/tabs'
import { useAppInit } from 'hooks/useAppInit'
import 'assets/styles/normalize.css'

const App: React.FC = () => {
  const { isInitialized } = useAppInit()

  if (!isInitialized) {
    return (
      <Flex align="center" justify="center" gap="middle" style={{ height: '100vh' }}>
        <Spin size="large" />
      </Flex>
    )
  }

  return (
    <Layout style={{ padding: 16, background: '#FFF' }}>
      <Tabs />
    </Layout>
  )
}

export default App
