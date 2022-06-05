import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { Button, Modal, Form, Input, Checkbox, DatePicker } from "antd"
import { PlusOutlined } from "@ant-design/icons"
import TextArea from "antd/lib/input/TextArea"

interface Props {
    OnAdd: Function
}

export default function TodoAdd(p: Props) {

    const [todo, setTodo] = useState({
        title: "",
        done: false,
        editing: false,
        time: ""
    })
    const [visible, setVisible] = useState(false)
    const [form] = Form.useForm()
    const history = useHistory()

    const showModal = () => {
        setVisible(true)
    }

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

    const handleDateChange = (value: moment.Moment | null) => {
        const t = (value === null) ? '' : value?.format("YYYY-MM-DD hh:mm:ss a")
        setTodo({ ...todo, time: t })
    }

    const handleFinish = () => {
        console.log(todo)
        p.OnAdd(todo)
        handleClose()
        history.replace("/Todo/All")
    }

    return (
        <>
            <Button
                type="primary" shape="circle" icon={<PlusOutlined />} onClick={showModal}
                style={{ transform: "translateY(25px)", height: "45px", width: "45px" }}
            />
            <Modal visible={visible} onOk={form.submit} onCancel={handleClose} forceRender>
                <Form form={form} onFinish={handleFinish} style={{ marginTop: "20px" }}>
                    <Form.Item
                        label="標題:"
                        name="title"
                        rules={[{ required: true, max: 50 }]}
                    >
                        <Input name="title" onChange={handleChange} />
                    </Form.Item>
                    <Form.Item
                        name="title"
                        valuePropName="done"
                    >
                        <Checkbox
                            onChange={(e) => { setTodo({ ...todo, "done": e.target.checked }) }}
                        >
                            完成了?
                        </Checkbox>
                    </Form.Item>
                    <Form.Item
                        label="說明"
                        name="content"
                        rules={[{ required: true }]}
                    >
                        <TextArea name="content" cols={30} rows={5} onChange={handleContentChange} />
                    </Form.Item>
                    <Form.Item
                        label="日期"
                        name="time"
                        rules={[{ required: true }]}
                    >
                        <DatePicker showTime onChange={handleDateChange} onOk={handleDateChange} />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}