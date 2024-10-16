import React from 'react'
import imagedevices from '../assets/image-devices.png';

function Access() {
  return (
    <div id="access">
      <div class="section-container my-20">
        <h3>Access Clipboard Anywhere</h3>
        <p class="section-content mb-24 text-xl">
          Whether you’re on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </p>

        <img src={imagedevices} alt="" class="mx-auto" />
      </div>
    </div>
  )
}

export default Access