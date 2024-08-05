// import Link from "next/link";
// import Image from "next/image";
// import { NAV_LINKF, NAV_LINKS } from "@/constants";

// const Navbar = () => {
//   return (
//     <div className="w-full h-56 bg-white py-20">
//       <nav className="relative container mx-auto flex items-center justify-between">
//         <div className="flex-grow flex items-center justify-center my-auto">
//           <ul className="flex space-x-10">
//             {NAV_LINKF.map((link) => (
//               <li key={link.key}>
//                 <Link href={link.href} className="regular-40 text-red-600 cursor-pointer pb-1.5 transition-all hover:text-red-700">
//                   {link.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/3">
//           <Link href="/">
//             <Image src="/potens-2.png" alt="logo" width={500} height={500} />
//           </Link>
//         </div>
//         <div className="flex-grow flex items-center justify-center my-auto">
//           <ul className="flex space-x-10">
//             {NAV_LINKS.map((link) => (
//               <li key={link.key}>
//                 <Link href={link.href} className="regular-40 text-red-600 cursor-pointer pb-1.5 transition-all hover:text-red-700">
//                   {link.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;


"use client";
import React from "react";
import { FloatingNav } from "./ui/FloatingNavbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

const FloatingNavDemo = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

export default FloatingNavDemo;
