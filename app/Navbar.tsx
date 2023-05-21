import React from 'react';
import { useState } from 'react';
import { Popover } from '@headlessui/react';
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Fragment } from 'react'
import Image from 'next/image';
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes:any[]) {
  return classes.filter(Boolean).join(' ')
}


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='sticky top-0 z-1000 bg-black border border-white border-t-0 border-x-0 p-5'>
      <div className="flex flex-row items-center justify-between mx-auto max-w-7xl">
        <a href="/"> <Image src='https://see.fontimg.com/api/renderfont4/6m4o/eyJyIjoiZnMiLCJoIjo3MSwidyI6MTAwMCwiZnMiOjcxLCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiI0EyMEQwRCIsInQiOjF9/Q09ERS5nZw/atlantia-expanded-italic.png'     width={300} height={300}
 alt={'logo'}       />
        
</a>
        <a href="/">нүүр</a>
        <a href="">Бидний тухай</a>
        <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm  ">
        хичээлүүд
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-black shadow-lg ring-1 ring-white ring-opacity-3 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/html-introduction"
                  className={classNames(
                    active ? 'bg-[#1f1f1f] ' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  HTML
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-[#1f1f1f] ' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  CSS
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-[#1f1f1f] ' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  JavaScript
                </a>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-[#1f1f1f] ' : 'text-white',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    c++
                  </button>
                )}
              </Menu.Item>
            </form>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-[#1f1f1f] ' : 'text-white',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    c++
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
    <a href="">Холбоо барих</a>

      

        <Popover>
          <Popover.Button>
            <MagnifyingGlassIcon className='w-auto h-8 cursor-pointer' onClick={() => setIsOpen(!isOpen)} />
          </Popover.Button>
          <Popover.Panel
            className='absolute z-10 w-72 max-w-xs p-4 mt-2 transform -translate-x-1/2 left-1/2 bg-white rounded-md shadow-lg'
            style={{ display: isOpen ? 'block' : 'none' }}
          >
            <input type='text' placeholder='Search' className='w-full py-2 px-3 border border-gray-300 rounded-md' />
          </Popover.Panel>
        </Popover>
      </div>
    </div>
  );
}

export default Navbar;
  