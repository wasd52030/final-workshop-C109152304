import { ClockCircleOutlined } from "@ant-design/icons"
import { Todo } from "./data"
import TodoDelete from "./TodoDelete"
import TodoEdit from "./TodoEdit"


interface Props {
    todo: Todo,
    DoneStateHandler: Function,
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
            <label>
                <div className="desc">
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div className="title">
                            {props.todo.title}
                        </div>
                        <div className="time">
                            <ClockCircleOutlined style={{ marginLeft: "20px" }} />
                            <div>{props.todo.time.format("YYYY-MM-DD hh:mm a")}</div>
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
                <TodoDelete OnDelete={props.OnDelete} todo={props.todo} />
            </div>
            <div style={{ clear: "both" }}></div>
        </li>
    )
}