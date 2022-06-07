import React, { useEffect, useState } from "react"
import { Modal, Form, Input, Checkbox, DatePicker } from "antd"
import { Todo } from "./data"
import { shootMessage } from "../../utils"

interface Props {
    EditHandler: Function,
    Todo: Todo
}

export default function TodoEdit(props: Props) {
    const [todo, setTodo] = useState(props.Todo)
    const [visible, setVisible] = useState(false)
    const [form] = Form.useForm()

    useEffect(() => {
        setTodo(props.Todo)
    }, [visible])

    const handleClose = () => {
        setVisible(false)
        form.resetFields()
    }

    const handleFinish = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.preventDefault()
        form.validateFields()
            .then((value) => {
                setTodo(Object.assign(todo, value))
                props.EditHandler(todo)
                handleClose()
            })
            .catch((err) => {
                console.error(err)
                handleClose()
            })

        shootMessage("success", "修改成功", "已成功修改待辦事項！", 2)
    }

    return (
        <>
            <button className="edit" onClick={() => { setVisible(true) }}></button>
            <Modal visible={visible} onOk={handleFinish} onCancel={handleClose} destroyOnClose={true} forceRender >
                <Form
                    form={form} name="add" style={{ marginTop: "20px" }}
                    initialValues={todo}
                >
                    <Form.Item
                        label="標題:"
                        name="title"
                        hasFeedback
                        rules={[{ required: true, max: 50 }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="done"
                        label="完成了?"
                        rules={[{ required: true }]}
                        valuePropName="checked"
                        hasFeedback
                    >
                        <Checkbox />
                    </Form.Item>
                    <Form.Item
                        label="說明"
                        name="content"
                        hasFeedback
                        rules={[{ required: true }]}
                    >
                        <Input.TextArea cols={30} rows={5} />
                    </Form.Item>
                    <Form.Item
                        label="日期"
                        name="time"
                        hasFeedback
                        rules={[{ required: true }]}
                    >
                        <DatePicker showTime={{ format: "HH:mm" }} format="YYYY-MM-DD HH:mm" />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}