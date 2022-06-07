import { randomStrGenerate, randomDateTime } from "../../utils"

export interface Todo {
    id: number
    title: string
    content: string
    done: boolean
    time: moment.Moment
}

const todos: Todo[] = [
    {
        "id": 1,
        "title": randomStrGenerate(5),
        "done": true,
        "content": randomStrGenerate(25),
        "time": randomDateTime()
    },
    {
        "id": 2,
        "title": randomStrGenerate(5),
        "done": false,
        "content": randomStrGenerate(25),
        "time": randomDateTime()
    },
    {
        "id": 3,
        "title": randomStrGenerate(5),
        "done": true,
        "content": randomStrGenerate(25),
        "time": randomDateTime()
    },
    {
        "id": 4,
        "title": randomStrGenerate(5),
        "done": false,
        "content": randomStrGenerate(25),
        "time": randomDateTime()
    },
    {
        "id": 5,
        "title": randomStrGenerate(5),
        "done": true,
        "content": randomStrGenerate(25),
        "time": randomDateTime()
    },
    {
        "id": 6,
        "title": randomStrGenerate(5),
        "done": false,
        "content": randomStrGenerate(25),
        "time": randomDateTime()
    }
]

export default todos