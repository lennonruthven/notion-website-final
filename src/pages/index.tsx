import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import GitHub from '../components/svgs/github'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <img
        src="/vercel-and-notion.png"
        height="85"
        width="250"
        alt="Vercel + Notion"
      />
      <h1>Hi.</h1>
      <h2>
        {' '}
        <ExtLink
          href=""
          className="dotted"
          style={{ color: 'inherit' }}
        >
          
        </ExtLink>
      </h2>

      <Features />

      <div className="explanation">
        <p>
          
        </p>

        <p>
          
        </p>
      </div>
    </div>
  </>
)
