import React, { useEffect } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
import { GithubUser } from '../../types/types'
import UserName from '../UserName/UserName'
import UserSociety from '../UserSociety/UserSociety'
import UserStat from '../UserStat/UserStat'
import styles from './UserCard.module.scss'


interface UserCardProps  {
    data: GithubUser,
    loading: boolean
}

function UserCard ({data, loading}:UserCardProps ) {

  return (
    <div className={styles.userCardWrapper}>
       {loading? <ClipLoader className={styles.spinner} color="#0079FF" size={200} /> :(
        <>
            <UserName {...data}/>
            <UserStat {...data} />
            <UserSociety {...data}/>
        </>
       )}
    </div>
  )
}

export default UserCard