import { useEffect, useState } from "react"
import { Redirect, Route, Switch, useHistory, useLocation } from "react-router-dom"
import { CheckOutlined, DeleteOutlined } from "@ant-design/icons"
import { Result, Button } from "antd"
import todos from "./data"
import ItemList from "./ItemList"
import TodoAdd from "./TodoAdd"
import Todo from "./TodoDEF"
import DateOfCalendar from "./dateOfCalendar"


export default function TodoList() {
    const [list, setList] = useState(todos)
    const [optActive, setOptActive] = useState(true)
    const history = useHistory()
    const current = useLocation()

    useEffect(() => {
        if (current.pathname.indexOf('Calendar') > 0) {
            setOptActive(false)
            return
        }
        setOptActive(true)
        console.log(optActive)
    }, [current])

    const HandleDoneState = (item: Todo) => {
        setList(list.map(todo => {
            return todo.id === item.id ? { ...item, done: !item.done } : todo
        }))
    }

    const addHandler = (newTodo: Todo) => {
        setList([...list, { ...newTodo, id: list.length + 1 }])
    }

    const DeleteHandler = (item: Todo) => {
        setList(list.filter(todo => todo.id !== item.id))
    }

    const CatchEdit = (item: Todo) => {
        setList(list.map(todo => {
            return todo.id === item.id ? { ...item, editing: !item.editing } : todo
        }))
    }

    const EditHandler = (item: Todo) => {
        setList(list.map(todo => {
            return todo.id === item.id ? item : todo
        }))
    }

    return (
        <>
            {
                (optActive) && (
                    <div
                        className="header"
                        style={{ display: "flex", textAlign: "center", borderBottom: "1px solid #ededed" }}
                    >
                        <div style={{ flex: 1, textAlign: "left", justifyContent: "center" }}>
                            {
                                <Button
                                    icon={<CheckOutlined style={{ fontSize: "30px" }} />}
                                    style={{ height: "50px", width: "50px", border: "0" }}
                                    onClick={() => { setList(list.map(todo => { return { ...todo, done: true } })) }}
                                />
                            }
                        </div>
                        <div style={{ flex: 1 }}>
                            <TodoAdd OnAdd={addHandler} />
                        </div>
                        <div style={{ flex: 1, textAlign: "right", justifyContent: "center" }}>
                            {(list.filter(item => item.done).length > 0) && (
                                <Button
                                    icon={<DeleteOutlined style={{ fontSize: "30px" }} />}
                                    style={{ height: "50px", width: "50px", border: "0" }}
                                    onClick={() => setList(list.filter(item => !item.done))}
                                />
                            )}
                        </div>
                    </div>
                )
            }
            <Switch>
                <Route path='/Todo/All'>
                    {
                        <ItemList
                            todos={list}
                            DoneStateHandler={HandleDoneState}
                            CatchEdit={CatchEdit}
                            OnDelete={DeleteHandler}
                            EditHandler={EditHandler}
                        />
                    }
                </Route>
                <Route path='/Todo/Done'>
                    {
                        <ItemList
                            todos={list.filter(item => item.done === true)}
                            DoneStateHandler={HandleDoneState}
                            CatchEdit={CatchEdit}
                            OnDelete={DeleteHandler}
                            EditHandler={EditHandler}
                        />
                    }
                </Route>
                <Route path='/Todo/UnDone'>
                    {
                        <ItemList
                            todos={list.filter(item => item.done !== true)}
                            DoneStateHandler={HandleDoneState}
                            CatchEdit={CatchEdit}
                            OnDelete={DeleteHandler}
                            EditHandler={EditHandler}
                        />
                    }
                </Route>
                <Route path='/Todo/Calendar'>
                    <DateOfCalendar list={list} />
                </Route>

                {/* default route */}
                <Route exact path='/'>
                    <Redirect to='/Todo/All' />
                </Route>

                <Route
                    render={() => {
                        return (
                            <Result
                                status="404"
                                title="404"
                                subTitle="Sorry, the page you visited does not exist."
                                extra={
                                    <Button type="primary" onClick={() => history.replace('/Todo/All')}>
                                        Back Home
                                    </Button>
                                }
                            />
                        )
                    }}
                />
            </Switch>
        </>
    )
}