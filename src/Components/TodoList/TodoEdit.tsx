import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { Modal, Form, Input, Checkbox, DatePicker } from "antd"
import TextArea from "antd/lib/input/TextArea"
import * as moment from "moment"
import Todo from "./TodoDEF"

interface Props {
    EditHandler: Function,
    Todo: Todo
}

export default function TodoEdit(props: Props) {
    const [todo, setTodo] = useState(props.Todo)
    const [visible, setVisible] = useState(false)
    const [form] = Form.useForm()
    const history = useHistory()

    useEffect(() => {
        form.setFieldsValue({
            "title": todo.title,
            "done": todo.done,
            "content": todo.content,
            "time": moment(todo.time)
        })
    }, [props.Todo])

    const handleClose = () => {
        setVisible(false)
        form.resetFields()
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setTodo({ ...todo, [name]: value })
    }

    const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setTodo({ ...todo, [name]: value })
    }

    const handleFinish = () => {
        props.EditHandler(todo)
        handleClose()
        history.replace("/Todo/All")
    }

    return (
        <>
            <button className="edit" onClick={() => { setVisible(true) }}></button>
            <Modal visible={visible} onOk={form.submit} onCancel={handleClose} forceRender>
                <Form form={form} onFinish={handleFinish}>
                    <Form.Item
                        label="標題:"
                        name="title"
                        rules={[{ required: true, max: 20 }]}
                    >
                        <Input name="title" onChange={handleChange} value={todo.title} />
                    </Form.Item>
                    <Form.Item
                        name="done"
                        valuePropName="done"
                    >
                        <Checkbox
                            checked={todo.done}
                            onChange={(e) => { setTodo({ ...todo, "done": e.target.checked }) }}
                        >
                            已完成?
                        </Checkbox>
                    </Form.Item>
                    <Form.Item
                        label="說明:"
                        name="content"
                        rules={[{ required: true }]}
                    >
                        <TextArea
                            name="content"
                            value={todo.content}
                            cols={30} rows={5}
                            onChange={handleContentChange}
                        />
                    </Form.Item>
                    <Form.Item
                        label="日期"
                        name="time"
                        rules={[{ required: true }]}
                    >
                        <DatePicker showTime onOk={(value) => { setTodo({ ...todo, time: value.format("YYYY-MM-DD hh:mm:ss") }) }} />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}