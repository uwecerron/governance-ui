import React, { ReactNode } from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/animations/scale.css'

type TooltipProps = {
  content: ReactNode
  placement?: any
  className?: string
  children?: ReactNode
}

const Tooltip = ({
  children,
  content,
  className,
  placement = 'top',
}: TooltipProps) => {
  return (
    <Tippy
      animation="scale"
      placement={placement}
      appendTo={() => document.body}
      maxWidth="20rem"
      interactive
      content={
        <div
          className={`rounded p-3 text-xs bg-bkg-2 leading-5 shadow-md text-fgd-3 outline-none focus:outline-none ${className}`}
        >
          {content}
        </div>
      }
    >
      <div className="outline-none focus:outline-none">{children}</div>
    </Tippy>
  )
}

const Content = ({ className = '', children }) => {
  return (
    <div
      className={`inline-block cursor-help border-b border-fgd-3 border-dashed border-opacity-20 default-transition hover:border-bkg-2 ${className}`}
    >
      {children}
    </div>
  )
}

Tooltip.Content = Content

export default Tooltip
