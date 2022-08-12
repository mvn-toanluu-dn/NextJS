import React from 'react'
import Intro from './Intro/index';
import Services from './services/index';
import Popular from './Popular/index';
export default function HomePage():JSX.Element {
  return (
    <div className='page-home'>
        <Intro />
        <Services />
        <Popular />
    </div>
  )
}
