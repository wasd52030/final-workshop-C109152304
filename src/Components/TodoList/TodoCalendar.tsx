import { Calendar, Badge } from "antd"
import { useEffect, useState } from "react"
import * as moment from "moment"
import { Todo } from "./data"

interface Props {
    list: Todo[]
}


export default function TodoCalendar(props: Props) {

    const [list, setList] = useState(props.list)
    useEffect(() => {
        setList(list)
    }, [props.list])

    const getListData = (value: moment.Moment) => {
        const CalendarData = list.filter(item => {
            let v = moment(item.time)
            return (v.year() == value.year()) && (v.date() == value.date()) && (v.month() == value.month())
        })
        return CalendarData || []
    }

    const dateCellRender = (value: moment.Moment) => {
        const listData = getListData(value)
        return (
            <ul style={{ listStyle: "none" }}>
                {listData.map(item => (
                    <li key={item.id}>
                        <Badge color={item.done ? "green" : "orange"} text={item.title} />
                    </li>
                ))}
            </ul>
        )
    }

    return (
        <Calendar dateCellRender={dateCellRender} />
    )
}