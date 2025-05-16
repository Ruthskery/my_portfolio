import React from 'react';
import Link from 'next/link';

function Contact() {
  return (
    <section id="contact" className="scroll-mt-20">
      <div className="text-black min-h-screen flex flex-col items-center justify-center p-8">
        <h2 className="text-7xl font-bold mb-4 border-b border-white w-full text-center">CONTACT</h2>
        <div className="border-t border-black w-[120vh] my-4" />

        <div className="w-full max-w-md mt-4">

          {/* Social Media Section */}
          <div className="flex mb-6">
            <div className="font-bold text-4xl md:pt-6">social media</div>
            <div className="space-y-1 text-xl ml-6">
              <Link href="https://www.facebook.com/cyrilimperial12" target="_blank">
                <div className="border-b border-gray-500 w-[30vh] hover:text-blue-600 hover:text-2xl transition-all duration-300 cursor-pointer">
                  facebook
                </div>
              </Link>
              <Link href="https://www.instagram.com/cyrilimperial12" target="_blank">
                <div className="border-b border-gray-500 w-[30vh] hover:text-pink-500 hover:text-2xl transition-all duration-300 cursor-pointer">
                  instagram
                </div>
              </Link>
              <Link href="https://www.linkedin.com/in/cyrilimperial12" target="_blank">
                <div className="border-b border-gray-500 w-[30vh] hover:text-blue-700 hover:text-2xl transition-all duration-300 cursor-pointer">
                  linkedIn
                </div>
              </Link>
              <Link href="https://t.me/cyrilimperial12" target="_blank">
                <div className="border-b border-gray-500 w-[30vh] hover:text-blue-400 hover:text-2xl transition-all duration-300 cursor-pointer">
                  telegram
                </div>
              </Link>
            </div>
          </div>

          {/* Email Section */}
          <div className="flex flex-row gap-24 mb-6">
            <div className="font-bold text-4xl">email</div>
            <div className="w-2/3 space-y-1 text-xl">
              <Link href="mailto:cyrilimperial12@gmail.com" target="_blank">
                <div className="border-b border-gray-500 w-[30vh] hover:text-red-600 hover:text-2xl transition-all duration-300 cursor-pointer">
                  gmail
                </div>
              </Link>
            </div>
          </div>

          {/* Career Section */}
          <div className="flex flex-row gap-20 mb-6">
            <div className="font-bold text-4xl md:pt-3">career</div>
            <div className="w-2/3 space-y-1 text-xl">
              <Link href="https://github.com/cyrilimperial" target="_blank">
                <div className="border-b border-gray-500 w-[30vh] hover:text-gray-800 hover:text-2xl transition-all duration-300 cursor-pointer">
                  github
                </div>
              </Link>
              <Link href="https://www.linkedin.com/in/cyrilimperial12" target="_blank">
                <div className="border-b border-gray-500 w-[30vh] hover:text-blue-700 hover:text-2xl transition-all duration-300 cursor-pointer">
                  linkedIn
                </div>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
