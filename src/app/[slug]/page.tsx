import api from "@/api";
import Link from "next/link";
import React from "react";
import {notFound} from 'next/navigation'
import '../../styles.css'

type Props = {
  params: {
    slug: string;
  }
}

export default async function Slug({params: {slug}}: Props)   {
  const users = await api.user.list();
  const user = users.find(u => u.slug === slug);

  if (!user) {
    return notFound();
  }

  const links = await api.links.fetch(user.url);

  return (
    <main className="container flex flex-col justify-center items-center text-center">
      <h1 className="text-3xl font-bold underline">Links de {slug}</h1>
      <ul className = "flex flex-col gap-2 mt-3 w-64">
      {links.map((link) => <li className = "bg-sky-500/50 p-1 rounded-lg capitalize"key = {link.url}>
        <Link href = {link.url}>{link.label}</Link>
      </li>)}
      </ul>
    </main>
  )
}
