import Link from "next/link"
import Image from "next/image"
import { NAV_LINKS, NAV_LINKF } from "@/constants"

const Navbar = () => {
  return (
    <div className="w-full bg-slate-950">
        <nav className=" flex items-center justify-between
        mx-auto max-w-[1440px] pt-0 px-30 lg:px-20 3xl:px-0 relative z-30">
            <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKF.map((link) => (
                    <Link href={link.href} key={link.key} className="regular-20
                    text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:text-teal-600">
                        {link.label}
                    </Link>
                ))}
            </ul>

            <Link href="/">
                <Image src="/logo.png" alt="logo" width={100} height={100}/>
            </Link>

            <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key} className="regular-20
                    text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:text-teal-600">
                        {link.label}
                    </Link>
                ))}
            </ul>
        </nav>
    </div> 
  )
}

export default Navbar