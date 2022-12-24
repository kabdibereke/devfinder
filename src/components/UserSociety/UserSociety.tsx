import styles from './UserSociety.module.scss'
import {ReactComponent as Location} from '../../assets/icon-location.svg'
import {ReactComponent as Twitter} from '../../assets/icon-twitter.svg'
import {ReactComponent as Website} from '../../assets/icon-website.svg'
import {ReactComponent as Company} from '../../assets/icon-company.svg'
import { GithubUser } from '../../types/types'


const UserSociety = (data:GithubUser) => {


  return (
    <div  className={styles.societyWrapper}>
       <div className={styles.wrapper}>
            <div className={styles.society}>
                <Location className={styles.icon}/>
                <div className={styles.text}>{data.location ||  'Not Available'}</div>
            </div>
            <div className={styles.society}>
                <Twitter className={styles.icon}/>
                <div className={styles.text}>{data.twitter_username ||  'Not Available'}</div>
            </div>
            <div className={styles.society}>
                <Website className={styles.icon}/>
                {data.blog? <a href={data.blog} className={styles.text}>{ data.blog.startsWith('https://')? data.blog.substring(8):data.blog }</a> : <div className={styles.text}>
                Not Available
                </div>}
            </div>
            <div className={styles.society}>
                <Company className={styles.icon}/>
                <div className={styles.text}>{data.company ||  'Not Available'}</div>
            </div>
       </div>
        
            
        
    </div>
  )
}

export default UserSociety