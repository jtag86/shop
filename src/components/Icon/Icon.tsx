import React from 'react'
import cl from './Icon.module.css'

interface Props {
  image: string,
  text: string
}

const Icon: React.FC<Props> = ({image, text}) => {
  return (
    <div className={cl.icon}>
      <div className={cl.wrapper}>
        <img className={cl.image} src={image} />
      </div>
      <p>{text}</p>
    </div>
  )
}

export default Icon