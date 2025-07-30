import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [user, setUser] = useState<null | { name: string }>(null)

  useEffect(() => {
    axios.get("https://organic-dollop-gwqwjr7wv972vgq5-3000.app.github.dev/api/user")
      .then(response => {
        setUser(response.data)
      })
      .catch(error => {
        console.error("Error fetching user data:", error)
      })
  }, [])

  return (
    <>
      <div className='h-screen bg-gray-900'>
        <h1 className="text-2xl text-white text-center p-4 pt-20 text-bold">This is my first Frontend plus Backend</h1>
        <div className="flex flex-col items-center justify-center mt-12 space-y-6">
          {user ? (
            <div className="bg-green-800 px-6 py-4 rounded-lg shadow-lg">
              <p className="text-white text-lg font-semibold text-center">Welcome, {user.name}!</p>
            </div>
          ) : (
            <div className="bg-blue-800 px-6 py-4 rounded-lg shadow-lg">
              <p className="text-white text-lg text-center">Please log in.</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App
