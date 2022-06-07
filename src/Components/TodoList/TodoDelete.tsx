import { useState } from "react"
import { useHistory } from "react-router-dom"
import { Modal } from "antd"
import { Todo } from "./data"
import { shootMessage } from "../../utils"

interface Props {
    todo: Todo
    OnDelete: Function
}

export default function TodoDelete(p: Props) {

    const [visible, setVisible] = useState(false)
    const history = useHistory()

    const showModal = () => {
        setVisible(true)
    }

    const handleClose = () => {
        setVisible(false)
    }

    const handleFinish = () => {
        p.OnDelete(p.todo)
        handleClose()
        history.replace("/Todo/All")
        shootMessage("success", "刪除成功", "已成功刪除待辦事項！", 2)
    }

    return (
        <>
            <button className="destroy" onClick={showModal}></button>
            <Modal visible={visible} onOk={handleFinish} onCancel={handleClose} destroyOnClose={true}  forceRender>
                確定要刪除嗎?
            </Modal>
        </>
    )
}