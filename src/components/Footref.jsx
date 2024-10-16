import React from 'react'
import logogoogle from '../assets/logo-google.png';
import logoibm from '../assets/logo-ibm.png';
import logomicrosoft from '../assets/logo-microsoft.png';
import logohp from '../assets/logo-hp.png';
import logovectorgraphics from '../assets/logo-vector-graphics.png';

function Footref() {
  return (
    <div id="references">
    <div
      class="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0"
    >
      <img src={ logogoogle } alt="" />
      <img src={ logoibm } alt="" />
      <img src={ logomicrosoft } alt="" />
      <img src={ logohp } alt="" />
      <img src={ logovectorgraphics } alt="" />
    </div>
  </div>
  )
}

export default Footref