import './styles/index.scss'
import { Header } from "./components/Header"
import { ResumeSection } from './components/ResumeSection'
import { EntriesList } from './components/EntriesList'
import { RegisterSection } from './components/RegisterSection'
import { useState } from 'react'

function App() {

  const [entries, setEntries] = useState([
    {
      id: crypto.randomUUID(),
      value: 90.0,
      categoryId: 0,
    },
    {
      id: crypto.randomUUID(),
      value: 40.0,
      categoryId: 1,
    },
    {
      id: crypto.randomUUID(),
      value: 15.5,
      categoryId: 0,
    },
  ])

  const [type, setType] = useState(null)

  return (<>
    <Header />
    <RegisterSection entries={entries} setEntries={setEntries} />
    <ResumeSection setType={setType} />
    <EntriesList entries={entries} setEntries={setEntries} type={type} />
  </>)
}

export default App
