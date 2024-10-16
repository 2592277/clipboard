import React from 'react'
import logo from '../assets/logo.svg';
import iconinstagram from '../assets/icon-instagram.svg';
import icontwitter from '../assets/icon-twitter.svg';
import iconfacebook from '../assets/icon-facebook.svg';

function Footer() {
  return (
    <footer class="bg-gray-50">
      <div class="section-container">
        <div class="flex flex-col items-center justify-between md:flex-row">
          
          <img src={ logo } alt="" class="scale-50" />
          
          <div
            class="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue"
          >
           
            <div
              class="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0"
            >
              
              <div class="flex flex-col space-y-4 text-center md:text-left">
                <div><a href="#" class="hover:text-strongCyan">FAQs</a></div>
                <div>
                  <a href="#" class="hover:text-strongCyan">Contact Us</a>
                </div>
              </div>
              
              <div class="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <a href="#" class="hover:text-strongCyan">Privacy Policy</a>
                </div>
                <div>
                  <a href="#" class="hover:text-strongCyan">Press Kit</a>
                </div>
              </div>
              
              <div class="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <a href="#" class="hover:text-strongCyan">Install Guide</a>
                </div>
              </div>
            </div>

          
            <div class="flex justify-between w-32 py-1">
              <a href="#"
                ><img
                  src={iconfacebook}
                  alt=""
                  class="duration-200 ficon"
              /></a>
              <a href="#"
                ><img
                  src={icontwitter}
                  alt=""
                  class="duration-200 ficon"
              /></a>
              <a href="#"
                ><img
                  src={iconinstagram}
                  alt=""
                  class="duration-200 ficon"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer