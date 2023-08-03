import classNames from 'classnames'
import React from 'react'

interface HeadItemMenuProps {
  children: React.ReactNode
  onClick: () => void
}

export const HeaderItem = ({ children, onClick }: HeadItemMenuProps) => {
  return (
    <div
      onClick={() => onClick()}
      className={classNames('flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#1E90FF]')}
    >
      {children}
    </div>
  )
}
