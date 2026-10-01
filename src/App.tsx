import Counter from './components/Counter'
import './App.css'

function App() {
  return (
    <main className="app-shell">
      <p className="eyebrow">State management lab</p>
      <h1>Redux Counter</h1>
      <p className="intro">A focused example of shared state with React and TypeScript.</p>
      <Counter />
    </main>
  )
}

export default App
