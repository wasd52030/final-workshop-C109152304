export const randomStrGenerate = (n: number): string => {
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

const todos = [
    {
        "id": 1,
        "title": randomStrGenerate(5),
        "done": true,
        "content": randomStrGenerate(50),
        "editing": false,
        "time": "2022-05-10 10:16:28"
    },
    {
        "id": 2,
        "title": randomStrGenerate(5),
        "done": false,
        "content": randomStrGenerate(10),
        "editing": false,
        "time": "2022-05-11 10:16:28"
    },
    {
        "id": 3,
        "title": randomStrGenerate(5),
        "done": false,
        "content": randomStrGenerate(50),
        "editing": false,
        "time": "2022-05-12 10:16:28"
    },
    {
        "id": 4,
        "title": randomStrGenerate(5),
        "done": true,
        "content": randomStrGenerate(50),
        "editing": false,
        "time": "2022-05-13 10:16:28"
    },
    {
        "id": 5,
        "title": randomStrGenerate(5),
        "done": true,
        "content": randomStrGenerate(50),
        "editing": false,
        "time": "2022-05-14 10:16:28"
    },
    {
        "id": 6,
        "title": randomStrGenerate(5),
        "done": false,
        "content": randomStrGenerate(50),
        "editing": false,
        "time": "2022-05-15 10:16:28"
    }
]

export default todos