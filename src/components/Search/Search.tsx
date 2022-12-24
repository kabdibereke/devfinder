import styles from './Search.module.scss'
import lupa from '../../assets/icon-search.svg'
import { Dispatch, SetStateAction, useState } from 'react'
import { GithubUser } from '../../types/types'
interface SearchProps  {
  setData: Dispatch<SetStateAction<GithubUser>>
  setLoading:Dispatch<SetStateAction<boolean>>
  
}

const Search = ({setData,setLoading}:SearchProps) => {
  const [inputName, setInputName] = useState('')
  const [error, setError] =useState('')
  const onSubmit = async (e:React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault()
    setLoading(true)
    try {
      const response =  await fetch(`https://api.github.com/users/${inputName}`)
      
      const data = await response.json();
      if (!response.ok) {
        setError(data.message)
        throw new Error(`Could not fetch ${inputName}, status: ${response.status}`);
      }
      console.log(data)
      setData(data)
      
      return data;
    } catch (e: unknown) {
      if (e instanceof Error) {
          console.log(e.message) 
      } 
    }finally {
      setLoading(false)
      setInputName('')
      setTimeout(()=> {
        setError('')
      },2000)
    }
  }
  return (
    <div className={styles.searchWrapper}>
        <form onSubmit={onSubmit} className={styles.form}>
            <img src={lupa} alt="search" />
            <input onChange={(e)=> setInputName(e.target.value)} value={inputName} type="text" placeholder='Search GitHub Username' />
            {error.length!=0 && <p className={styles.text}>user not found</p>}
            <button className={styles.button}> Search</button>
        </form>
    </div>
  )
}

export default Search