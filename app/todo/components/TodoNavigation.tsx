import Link from 'next/link'
import api from '../api'
import { LucideIcon, Sun, Menu } from 'lucide-react'

export default async function TodoNavigation() {
    return (
        <div className="flex flex-col py-3 px-1 min-w-50 bg-zinc-300 gap-1">
            <Profile />
            <TodoSearch />
            <SmartLists />
            <hr className="border-zinc-400/50" />
            <TodoLists lists={['Groceries', 'Chores', 'Work Assignements']} />
        </div>
    )
}

function SmartLists() {
    return (
        <nav className="flex flex-col gap-y-1">
            <SmartList link="today" label="My Day" icon={Sun} />
            <SmartList link="important" label="Important" icon={Sun} />
            <SmartList link="planned" label="Planned" icon={Sun} />
            <SmartList link="mine" label="Assigned to me" icon={Sun} />
            <SmartList link="tasks" label="Tasks" icon={Sun} />
        </nav>
    )
}

type TextColor =
    'text-red-400' |
    'text-green-400' |
    'text-blue-400' |
    'text-cyan-400' |
    'text-violet-400' |
    'text-orange-400' |
    'text-black'

export function textColorToBg(textColor: TextColor) {
    switch (textColor) {
        case 'text-red-400': return 'bg-red-400'
        case 'text-green-400': return 'bg-green-400'
        case 'text-blue-400': return 'bg-blue-400'
        case 'text-cyan-400': return 'bg-cyan-400'
        case 'text-violet-400': return 'bg-violet-400'
        case 'text-orange-400': return 'bg-orange-400'
        case 'text-black':
        default: return 'bg-blue-400'
      }
}

interface SmartListProps {
    icon?: LucideIcon
    link: string
    label: string
    color?: TextColor
}
function SmartList({ icon: Icon = Menu, link, label, color = 'text-black' }: SmartListProps) {
    return (
        <Link href={`/todo/${link}`} className="text-sm hover:cursor-default flex py-2 px-3 hover:bg-zinc-400/20 rounded flex-1 gap-3">
            <Icon className={`size-6 ${color}`} />
            <div>{label}</div>
        </Link>
    )
}

async function TodoLists({ lists }: { lists: any[] }) {
    const listz: any[]  = await api.getTodoLists() ?? []
    return (
        <nav className="flex flex-col gap-y-1">
            {listz.map(group => <SmartList link={group.id} label={group.name} key={group.id} />)}
        </nav>
    )
}

function Profile() {
    return (
        <div className="d-block min-h-16">
        </div>
    )
}

function TodoSearch() {
    return (
        <form className="px-4">
            <input type="text" placeholder="Search" className="rounded border-b-slate-500 border-b-1 py-1 px-2 shadow-sm shadow-zinc-400" />
        </form>
    )
}