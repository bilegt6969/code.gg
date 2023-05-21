import React from 'react';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});
 

function Dashbar() {
return (
  <div className="min-w-[15rem] col-span-1 mt-8">
  <div className={roboto.className}>
    <h1 className="text-lg font-bold mb-4 text-white">HTML tutorial</h1>
    <div className="pl-4 text-[#9ba1a6] cursor-pointer flex flex-col space-y-3">
      <a href="../html-introduction" className="hover:text-gray-100 transition duration-100 ease-in-out active:text-red-500 active:bg-violet-700 focus:text-red-500">HTML Introduction</a>
      <a href='../html-editor' className="hover:text-gray-100 transition duration-100 ease-in-out active:active:bg-violet-700 focus:text-red-500">HTML Editor</a>
      <a href='../html-basic' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Үндсэн ойлголт</a>
      <a href='../html-element' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Element</a>
      <a href='../html-attributes' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Attributes</a>
      <a href='../html-headings' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Headings</a>
      <a href='../html-paragraph' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Paragraph</a>
      <a href='../html-style' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Style</a>
      <a href='../html-text' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Text Formatting </a>
      <a className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Quotation </a>
      <a className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Comments</a>
      <a className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Colors</a>
      <a className="hover:text-gray-100 transition duration-100 ease-in-out">HTML CSS</a>
      <a className="hover:text-gray-100 transition duration-100 ease-in-out">HTML anks</a>
      <a className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Images</a>
      <a className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Tables</a>
      <a className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Block</a>
      <a className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Class</a>
      <a className="hover:text-gray-100 transition duration-100 ease-in-out">HTML id</a>
      <a className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Iframe</a>
      <a className="hover:text-gray-100 transition duration-100 ease-in-out">HTML JavaScript</a>
      <a className="hover:text-gray-100 transition duration-100 ease-in-out">HTML File Paths</a>
      <a className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Head</a>
      <a className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Layout</a>
      <a className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Responsive</a>
      <a className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Semantic</a>
      <a className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Forms</a>
      <a className="hover:text-gray-100 transition duration-100 ease-in-out">HTML form </a>
      <a className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Input Type</a>
      <a className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Submit Button</a>
    </div>
    
  </div>
</div>


);
}

export default Dashbar;