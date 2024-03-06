import { TodoAPI } from "./api"

const baseUrl = `https://${process.env.MOCK_API_SECRET}.mockapi.io/` 

const api = {
    async getTodoLists() {
        const res = await fetch(`${baseUrl}/lists`)
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        return await res.json()
    },
    async getTodoListDetails(id) {
        const res = await fetch(`${baseUrl}/lists/${id}`)
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        return await res.json()
    },
    async getTodoListTasks(id) {
        const res = await fetch(`${baseUrl}/task`)
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        return await res.json().then(tasks => tasks.filter(({ listId }) => listId === id))
    },
} as TodoAPI

export default api