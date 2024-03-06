import api from "../api"
import { textColorToBg } from "../components/TodoNavigation"
import { Plus, Circle } from "lucide-react"

export default async function Page({ params }: { params: any }) {
  const { id } = params
  const details = await api.getTodoListDetails(id)
  const tasks = await api.getTodoListTasks(id)
  return (
    <div className={`p-14 min-h-lvh ${textColorToBg(details.color)} flex flex-col`}>
      <div className="flex justify-between items-center w-full">
        <h1 className="text-2xl font-semibold flex-1 text-white">{details.name}</h1>
        <div className="">
          Actions
        </div>
      </div>
      <ul className="flex-1 flex-col space-y-1">
        {tasks?.map(item => <TodoItem key={item.id} {...item} />)}
      </ul>
      <AddTodoItem />
    </div>
  )
}

function AddTodoItem() {
  return (
    <div tabIndex={0} className="group p-3 min-h-10 rounded bg-white opacity-70 relative hover:opacity-90 cursor-text flex items-center w-full gap-4">
      <div className="group-focus-within:opacity-0 transition-opacity w-full">
        <Plus className="inline-block mr-3" />
        <span className="text-sm ">Add a task</span>
      </div>
      <div className="peer-focus-within:opacity-0 transition-opacity absolute w-full">
        <Circle className="" />
        <input type="text" className="" placeholder="Hello" />
      </div>
    </div>
  )
}

interface TodoItemProps {
  id: string
  description: string
}

function TodoItem({ id, description }: TodoItemProps) {
  return (
    <div className="p-3 min-h-10 rounded bg-white relative cursor-text flex items-center w-full gap-4">
      {id} - {description}
    </div>
  )
}