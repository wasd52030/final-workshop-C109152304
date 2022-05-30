import Item from "./Item"
import Todo from "./TodoDEF"

interface Props {
    todos: Todo[],
    DoneStateHandler: Function,
    CatchEdit: Function,
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
                            CatchEdit={props.CatchEdit}
                            OnDelete={props.OnDelete}
                            EditHandler={props.EditHandler}
                        />
                    )
                })
            }
        </ul>
    )
}