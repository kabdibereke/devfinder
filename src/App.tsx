import { FormEvent, useEffect, useState } from 'react'
import Container from './components/Container/Container'
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import UserCard from './components/UserCard/UserCard'
import { GithubUser } from './types/types'
import { defaultUser } from './mock/mock'

function App() {
  const [data, setData] = useState(defaultUser);
  const [loading, setLoading] =useState(false);
  

  
 
  return (
    <Container>
    
          <Header/>
          <Search setData={setData} setLoading={setLoading} />
          <UserCard data={data} loading={loading}/>
    </Container>
  )
}

export default App
