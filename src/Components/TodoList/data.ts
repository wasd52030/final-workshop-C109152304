export function randomStrGenerate(n: number): string {
    return (
        Array.from({ length: Math.floor(Math.random() * n + 1) })
            .map(_ => {
                return (
                    Array.from({ length: Math.floor(Math.random() * 10 + 1) })
                        .map(_ => String.fromCharCode(97 + Math.random() * 26)).join('')
                )
            }
            )
            .join(' ')
    )
}

export interface Todo {
    id: number
    title: string
    content: string
    done: boolean
    editing: boolean
    time: string
}

const todos: Todo[] = [
    {
        "id": 1,
        "title": randomStrGenerate(5),
        "done": true,
        "content": randomStrGenerate(25),
        "editing": false,
        "time": "2022-05-10 01:16:28 am"
    },
    {
        "id": 2,
        "title": randomStrGenerate(5),
        "done": false,
        "content": randomStrGenerate(25),
        "editing": false,
        "time": "2022-05-11 02:16:28 pm"
    },
    {
        "id": 3,
        "title": randomStrGenerate(5),
        "done": false,
        "content": randomStrGenerate(25),
        "editing": false,
        "time": "2022-05-12 03:16:28 am"
    },
    {
        "id": 4,
        "title": randomStrGenerate(5),
        "done": true,
        "content": randomStrGenerate(25),
        "editing": false,
        "time": "2022-05-13 05:16:28 pm"
    },
    {
        "id": 5,
        "title": randomStrGenerate(5),
        "done": true,
        "content": randomStrGenerate(25),
        "editing": false,
        "time": "2022-05-14 08:16:28 am"
    },
    {
        "id": 6,
        "title": randomStrGenerate(5),
        "done": false,
        "content": randomStrGenerate(25),
        "editing": false,
        "time": "2022-05-15 03:16:28 pm"
    }
]

export default todos