import ResumeBuilder from "./components/ResumeBuilder"

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <header className="py-6 shadow-md bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-2xl font-bold">Resume Builder</h1>
        </div>
      </header>
      <main className="py-10 px-4">
        <ResumeBuilder />
      </main>
    </div>
  )
}

export default App