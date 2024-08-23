import React from 'react';
import './Footer.css';
import FlagOfNepal from '/image/FlagOfNepal.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1A1D2B]">
      <div className="container mx-auto p-0 md:p-8 xl:px-0">
        <div className="mx-auto max-w-7xl px-6 pb-10 pt-16">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-4">
              <div>
                <Link to="/">
                  <div className="flex items-center space-x-2 text-2xl font-large">
                    <span>
                      <img src={FlagOfNepal} alt="AI Logo"
                        width="64" height="64" className="w-16" />
                    </span>
                    <span className="text-white">Tourism Nepal</span>
                  </div>

                </Link>
              </div>
              <div className="max-w-md pr-16 text-md text-gray-200">Website for listing down all the major tourist destinations in Nepal.
              </div>

            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-md font-semibold leading-6 text-white">Explore</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <Link to="Nature"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50">Nature
                      </Link>
                    </li>
                    <li>
                      <Link to="Culture"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50">Culture
                      </Link>
                    </li>
                    <li>
                      <Link to="Adventure"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50">Adventure
                      </Link>
                    </li>
                    <li>
                      <Link to="Mountain"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50">Mountain
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-md font-semibold leading-6 text-white">Location</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <Link to="Kathmandu"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50">Kathmandu
                      </Link>
                    </li>
                    <li>
                      <Link to="Pokhara"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50">Pokhara
                      </Link>
                    </li>
                    <li>
                      <Link to="Chitwan"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50">Chitwan
                      </Link>
                    </li>
                    <li>
                      <Link to="Mustang"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50">Mustang
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-md font-semibold leading-6 text-white">Places</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <Link to="KathmanduDurbarSquare"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50">Kathmandu Durbar Square
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"><a
                          href="https://images.unsplash.com/photo-1715753990431-192c4e1695b1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJzZW5hbCUyMGxvZ298ZW58MHx8MHx8fDA%3D"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Don't Click 1
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"><a
                          href="https://drive.google.com/file/d/1L6GidUzuDIW7kt5v-sWaOUjKGzPROX3-/view?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Don't Click
                        </a>
                      </Link>

                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-gray-400/30 pt-8 sm:mt-20 lg:mt-24">
            <div className="text-md text-center text-white">
              Designed and developed by
              <a
                href="https://rakshaksigdel.com.np"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rakshak Sigdel
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer
