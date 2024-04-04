import React from 'react'
import { FirstComponent, FourthComponent } from './FirstComponent'
import SecondComponent from './SecondComponent'
import TestComponent from './TestComponent'
import ThirdComponent from './ThirdComponent'

const ParentComponent = () => {
  return (
    <div>
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
        <FourthComponent />
        <TestComponent />
    </div>
  )
}

export default ParentComponent