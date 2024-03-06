interface Forecast {
  date: string,
  temperatureC: number,
  temperatureF: number,
  summary: string
}

async function getWeather() {
  const res = await fetch(`${process.env.API_URL}/`)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return await res.json()
}


export default async function Page() {
  const data: Forecast[] = await getWeather()
  return (
    <div className="container mx-auto">
      <h1>Forecast</h1>
      <div className="flex flex-row flex-wrap gap-10 min-w-48">
        {data.map(forecast => (
          <div key={forecast.date} className="rounded bg-white p-4 text-black">
            <table>
              <tr>
                <td>Date</td>
                <td>{forecast.date}</td>
              </tr>
              <tr>
                <td>Temp (C)</td>
                <td>{forecast.temperatureC}</td>
              </tr>
              <tr>
                <td>Temp (F)</td>
                <td>{forecast.temperatureF}</td>
              </tr>
              <tr>
                <td>Summary</td>
                <td>{forecast.summary}</td>
              </tr>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}
