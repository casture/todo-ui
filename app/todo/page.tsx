import TodoNavigation from "./components/TodoNavigation"
import TodoList from "./components/TodoList"

// interface Forecast {
//   date: string,
//   temperatureC: number,
//   temperatureF: number,
//   summary: string
// }

// async function getWeather() {
//   const res = await fetch(`${process.env.API_URL}/`)
 
//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }
 
//   return await res.json()
// }


export default async function Page({ children }: { children: any }) {
  // const data: Forecast[] = await getWeather()
  return (
    <div>Empty</div>
  );
}
