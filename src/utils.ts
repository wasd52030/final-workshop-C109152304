import moment from "moment";
import { notification } from "antd"

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

export function randomDateTime(): moment.Moment {
    const start = new Date("2022-01-01 00:00:00 am")
    const end = new Date("2022-06-30 00:00:00 am")
    return (
        moment(
            Math.random() * (end.getTime() - start.getTime()) + start.getTime()
        )

    )
}

type NotificationType = 'success' | 'info' | 'warning' | 'error';
export const shootMessage = (type: NotificationType, message: string, description: string, duration: number) => {
    notification[type]({ message: message, description: description, duration: duration })
}