import mockApi from './api-mock'

const baseUrl = process.env.API_URL

export interface TodoAPI {
    getTodoLists(): any
    getTodoListDetails(id: string): any
    getTodoListTasks(id: string): any
}

const api = {
    async getTodoLists() {
        const res = await fetch(`${baseUrl}/api/TodoLists`)
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        return await res.json()
    },
    async getTodoListDetails(id) {
        return {}
    },
    async getTodoListTasks(id) {
        return []
    },
} as TodoAPI

export default false ? api : mockApi