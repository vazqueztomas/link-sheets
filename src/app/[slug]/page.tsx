import api from "@/api";
import Link from "next/link";
import React from "react";
import {notFound} from 'next/navigation'

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
    <main>
      <h1>Usuarios</h1>
      <ul>
      {links.map((link) => <li key = {link.url}>
        <Link href = {link.url}>{link.label}</Link>
      </li>)}
      </ul>
    </main>
  )
}
