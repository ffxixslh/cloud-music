import { ICONS } from '@/common/constants/icons'
import IconBox from '@/components/common/IconBox'

interface CMTopbarAnchorsProps {}

const CMTopbarAnchors: React.FC<CMTopbarAnchorsProps> = () => {
  return (
    <div id={'topbar-anchors'} className={'px-8 flex gap-1 ic'}>
      {['anchorLeft', 'anchorRight'].map((item, idx) => {
        return (
          <IconBox key={item} icon={ICONS['menuBar'][item]} iconSize={'3xl'} />
        )
      })}
    </div>
  )
}

export default CMTopbarAnchors
