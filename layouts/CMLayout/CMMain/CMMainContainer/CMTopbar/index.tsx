import IconBox from '@/components/IconBox'
import CMTopbarAnchors from './CMTopbarAnchors'
import CMTopbarSearch from './CMTopbarSearch'
import { ICONS } from '@/common/constants/icons'

interface CMTopbarProps {}

const CMTopbar: React.FC<CMTopbarProps> = () => {
  return (
    <div id={'main-topbar'} className={'w-full h-14 flex ic pt-2 mb-2 px-4'}>
      <CMTopbarAnchors />
      <CMTopbarSearch />
      <div id="top-bar-right">
        <div id={'topbar-options'} className={'px-2 flex gap-1'}>
          {['settings', 'minimize', 'maximize', 'close'].map((item, idx) => {
            return <IconBox key={item} icon={ICONS['menuBar'][item]} />
          })}
        </div>
      </div>
    </div>
  )
}

export default CMTopbar
