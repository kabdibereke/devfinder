import React from 'react'
import { GithubUser } from '../../types/types'
import styles from './UserStat.module.scss'


const UserStat = (data:GithubUser) => {
  return (
    <div className={styles.userStat}>
        <div className={styles.names}> 
            <div className={styles.name}>
                Repos
            </div>
            <div className={styles.name}>
                Followers
            </div>
            <div className={styles.name}>
                Following
            </div>
        </div>
        <div className={styles.stats}> 
            <div className={styles.stat}>
                {data.public_repos}
            </div>
            <div className={styles.stat}> 
                {data.followers}
            </div>
            <div className={styles.stat}>
                {data.following}
            </div>
        </div>
    </div>
  )
}

export default UserStat