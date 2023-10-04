import React, { useContext } from 'react'
import StoreContext from '../../store'
import Topbar from './Topbar'
import Content from './Content'

const Exchange = () => {
    const store = useContext(StoreContext)
  return (
    <div>
        <Topbar/>
        <Content/>
    </div>
  )
}

export default Exchange