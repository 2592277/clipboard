import React from 'react'
import iconblacklist from '../assets/icon-blacklist.svg';
import icontext from '../assets/icon-text.svg';
import iconpreview from '../assets/icon-preview.svg';

function Supcharge() {
  return (
    <div id="supercharge">
      <div class="section-container my-20">
        <h3>Supercharge your workflow</h3>
        <p class="section-content mb-16 text-xl">
          We've got the tools to boost your productivity.
        </p>
        
        <div
          class="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12"
        >
          
          <div class="flex flex-col items-center space-y-5">
            <img src={ iconblacklist } alt="" class="mb-6" />
            <h5>Create Blacklists</h5>
            <p class="max-w-md text-grayishBlue">
              Easily search your snippets by content, category, web address,
              application, and more.
            </p>
          </div>

          
          <div class="flex flex-col items-center space-y-5">
            <img src={ icontext } alt="" class="mb-6" />
            <h5>Plain Text Snippets</h5>
            <p class="max-w-md text-grayishBlue">
              Remove unwanted formatting from copied text for a consistent look.
            </p>
          </div>

       
          <div class="flex flex-col items-center space-y-5">
            <img src={ iconpreview } alt="" class="mb-6" />
            <h5>Sneak Preview</h5>
            <p class="max-w-md text-grayishBlue">
              Quick preview of all snippets on your Clipboard for easy access.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Supcharge