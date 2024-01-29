import { SettingsContext } from '@/context/setting-context'
import Link from 'next/link'
import React, { useContext } from 'react'
import { FaTimes, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Logo } from './logo'

const SideSection = () => {
    const { openSide, setOpenSide } = useContext(SettingsContext)
    return (
      <div >
        <FaTimes className="text-white text-xl hover:rotate-90 transition-all cursor-pointer hover:text-yellow duration-300 ease-in-out"
          onClick={() => { setOpenSide(!openSide) }}
        />
        <div className='h-full w-full grid gap-10 items-center py-10'>
          <Logo />
          <div>
            <h2 className="mb-7 text-2xl font-ahle ahle-heading text-white">
              ہمارے بارے میں
            </h2>
            <p className="text-white text-xl font-ahle">
              منہج سلف پر قرآن وحدیث کی تبلیغ واشاعت کی علمبردار - مرکزی جمعیت اہل حدیث پاکستان
            </p>
          </div>
          <div>
            <h2 className="mb-7 text-2xl font-ahle ahle-heading text-white">
              فالو کریں
            </h2>
            <ul className="flex gap-3">
              <li className='p-2 rounded-full border border-yellow hover:border-white text-yellow hover:text-white'>
                <Link href="#" className="">
                  <FaFacebookF size={24} />
                </Link>
              </li>
              <li className='p-2 rounded-full border border-yellow hover:border-white text-yellow hover:text-white'>
                <Link href="#" className="">
                  <FaTwitter size={24} />
                </Link>
              </li>
              <li className='p-2 rounded-full border border-yellow hover:border-white text-yellow hover:text-white'>
                <Link href="#" className="">
                  <FaYoutube size={24} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
  
      </div>
    )
}

export default SideSection