import { ReactNode } from 'react'
import CardVerticalBox from './CardVerticalBox'

interface BoardBoxProps {
  title: string
  children?: ReactNode
}

const BoardBox: React.FC<BoardBoxProps> = (props) => {
  const { title, children } = props
  return (
    <div id={'body-board'} className={'w-full h-fit flex flex-col gap-2'}>
      <div id={'board-title'} className={'text-4xl font-500'}>
        {title}
      </div>
      <div id={'board-content'} className={'flex gap-3'}>
        {children}
      </div>
    </div>
  )
}

export default BoardBox
