import React from 'react'
import Button from '@mui/material/Button'

interface IMenuList {
  title: boolean,
  text: string
}

interface Props {
  children: React.ReactNode
  onMouseOver: () => void
}

const GroupButton: React.FC<Props> = ({children, onMouseOver}) => {

  return (
    <Button onMouseOver={onMouseOver}>{children}</Button>
  )
}

export default GroupButton