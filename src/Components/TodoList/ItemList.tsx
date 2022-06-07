import Item from "./Item"
import {Todo} from "./data"

interface Props {
    todos: Todo[],
    DoneStateHandler: Function,
    OnDelete: Function,
    EditHandler: Function,
}

export default function ItemList(props: Props) {
    return (
        <ul className="todo-list">
            {
                props.todos.map((item, index) => {
                    return (
                        <Item
                            key={item.id}
                            index={index}
                            todo={item}
                            DoneStateHandler={props.DoneStateHandler}
                            OnDelete={props.OnDelete}
                            EditHandler={props.EditHandler}
                        />
                    )
                })
            }
        </ul>
    )
}