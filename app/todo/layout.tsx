import TodoNavigation from "./components/TodoNavigation"

export default async function Layout({ children }: { children: any }) {
    return (
      <div className="flex min-h-lvh">
        <TodoNavigation></TodoNavigation>
        <main className="w-full">
          {children}
        </main>
      </div>
    );
  }