import { ClockCircleOutlined } from "@ant-design/icons"
import {Todo} from "./data"
import TodoEdit from "./TodoEdit"


interface Props {
    todo: Todo,
    DoneStateHandler: Function,
    CatchEdit: Function,
    OnDelete: Function,
    EditHandler: Function,
    index: number
}

export default function Item(props: Props) {
    return (
        <li className={`${(props.todo.done) ? "completed" : ""} nth`}>
            <input
                className="toggle"
                type="checkbox"
                checked={props.todo.done}
                onChange={() => { props.DoneStateHandler(props.todo) }}
            />
            <label style={{ display: "flex" }}>
                <div className="desc">
                    <div className="title">
                        {props.todo.title}
                        <div className="time">
                            <ClockCircleOutlined style={{ marginLeft: "20px" }} />
                            <div>{props.todo.time}</div>
                        </div>
                    </div>
                    <div className="content">{props.todo.content}</div>
                </div>
            </label>
            <div style={{ float: "right" }}>
                {
                    (!props.todo.done) && (
                        <TodoEdit Todo={props.todo} EditHandler={props.EditHandler} />
                    )
                }
                <button className="destroy" onClick={() => props.OnDelete(props.todo)}></button>
            </div>
            <div style={{ clear: "both" }}></div>
        </li>
    )
}