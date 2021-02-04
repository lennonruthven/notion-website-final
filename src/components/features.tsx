import Lightning from './svgs/lightning'
import Jamstack from './svgs/jamstack'
import Wifi from './svgs/wifi'
import Lighthouse from './svgs/lighthouse'
import Plus from './svgs/plus'
import Notion from './svgs/notion'
import Edit from './svgs/edit'
import Scroll from './svgs/scroll'

const features = [
  {
    text: ' ',
    icon: Lightning,
  },
  {
    text: ' ',
    icon: Jamstack,
  },
  {
    text: ' ',
    icon: Wifi,
  },
  {
    text: ' ',
    icon: Edit,
  },
  {
    text: ' ',
    icon: Plus,
  },
  {
    text: ' ',
    icon: Scroll,
  },
  {
    text: ' ',
    icon: Notion,
  },
  {
    text: ' ',
    icon: Lighthouse,
  },
]

export default () => (
  <div className="features">
    {features.map(({ text, icon: Icon }) => (
      <div className="feature" key={text}>
        {Icon && <Icon height={0} width={0} />}
        <h4>{text}</h4>
      </div>
    ))}
  </div>
)
