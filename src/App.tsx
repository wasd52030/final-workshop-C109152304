import { BrowserRouter } from 'react-router-dom'
import { Link } from "react-router-dom"
import { Layout, Menu } from 'antd'
import { Content, Header } from 'antd/lib/layout/layout'
import TodoList from './Components/TodoList/TodoList'
import { randomStrGenerate } from './Components/TodoList/data'
import "./App.css"

function App() {
  
  const HeaderController = [
    {
      label: (
        <Link to='/Todo/All'>
          全部
        </Link>
      ), key: 1
    },
    {
      label: (
        <Link style={{ margin: "5px" }} to='/Todo/Done'>
          已完成
        </Link>
      ), key: 2
    },
    {
      label: (
        <Link to='/Todo/UnDone'>
          未完成
        </Link>
      ), key: 3
    },
    {
      label: (
        <Link to='/Todo/Calendar'>
          行事曆
        </Link>
      ), key: 4
    },
  ]

  return (

    <Layout>
      <BrowserRouter>
        <Header style={{ display: "flex" }}>
          <div style={{ fontSize: "30px", color: "white", margin: "0 5px" }}>Todos</div>
          <Menu theme="dark" mode="horizontal" items={HeaderController} />
          <div style={{ fontSize: "20px", color: "white", marginLeft: "auto" }}>C109152304 許智程</div>
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: "32px" }}>
          <div className="App">
            <TodoList />
          </div>
        </Content>
      </BrowserRouter>
    </Layout>

  )
}

export default App
