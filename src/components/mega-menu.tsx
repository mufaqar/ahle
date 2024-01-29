import Link from 'next/link'
import React from 'react'

const Mega_menu = ({ sub_item, click }: any) => {
    return (
        <li onClick={click}>
            <Link href={sub_item.link} className="uppercase font-ahle text-[17px] text-white hover:text-yellow hover:underline" >
                {sub_item.name}
            </Link>
        </li>
    )
}

export default Mega_menu