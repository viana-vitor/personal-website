"use client"
import Link from "next/link"

export default function Sidebar() {
    return (
        <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
            <ul>
                <li>
                    home
                </li>
                <li>
                    about
                </li>
                <li>
                    portfolio
                </li>
                <li>
                    blog
                </li>
            </ul>
        </aside>
    )
}



