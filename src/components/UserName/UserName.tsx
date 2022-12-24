import React from 'react'
import { GithubUser } from '../../types/types'
import styles from './UserName.module.scss'
const localDate = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

const UserName = (data:GithubUser ) => {
  const joinedDate = localDate.format(new Date(data.created_at))
  return (
    <div className={styles.userNameWrapper}>
     
        <img className={styles.img} src={data.avatar_url} alt="img" />
        <div className={styles.userNameInfo}>
          <div className={styles.name}>{data.name ||  'Not Available'}</div>
          <div className={styles.login}>{data.login ||  'Not Available'}</div>
          <div className={styles.bio}>{data.bio ||  'Not Available'}</div>
        </div>
      
      <div className={styles.data}>{joinedDate}</div>
    </div>
  )
}

export default UserName