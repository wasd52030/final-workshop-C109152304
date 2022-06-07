import React, { useState } from "react"
import { Button, Modal, Form, Input, Checkbox, DatePicker } from "antd"
import { PlusOutlined } from "@ant-design/icons"
import moment from "moment";
import { shootMessage } from "../../utils"


interface Props {
    OnAdd: Function
}

export default function TodoAdd(p: Props) {
    const [visible, setVisible] = useState(false)
    const [form] = Form.useForm()

    const showModal = () => {
        setVisible(true)
    }

    const handleClose = () => {
        setVisible(false)
        form.resetFields()
    }

    const handleFinish = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.preventDefault()
        form.validateFields()
            .then((value) => {
                p.OnAdd({ ...value })
                handleClose()
            })
            .catch((err) => {
                console.error(err)
                handleClose()
            })

        shootMessage("success", "新增成功", "已成功新增待辦事項！", 2)
    }

    return (
        <>
            <Button
                type="primary" shape="circle" icon={<PlusOutlined />} onClick={showModal}
                style={{ transform: "translateY(25px)", height: "45px", width: "45px" }}
            />
            <Modal visible={visible} onOk={handleFinish} onCancel={handleClose} destroyOnClose={true} forceRender>
                <Form
                    form={form} name="add" style={{ marginTop: "20px" }}
                    initialValues={{ time: moment(), done: false }}
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