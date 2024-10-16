import React from 'react';
import logo from '../assets/logo.svg';


function Herosection() {
  return (
    <div id="hero">
      <div class="section-container mb-40 pt-16">
        <img src={logo} alt="" class="mx-auto my-16" />

        <h3>A history of everything you copy</h3>

        <p class="section-content mb-10 text-2xl">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>

        <div class="button-container">
          <a
            href="#"
            class="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80"
          >
            Download for iOS
          </a>
          <a
            href="#"
            class="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80"
          >
            Download for Mac
          </a>
        </div>
      </div>
    </div>
  )
}

export default Herosection