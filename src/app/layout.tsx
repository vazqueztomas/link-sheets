import React from 'react'
type Props = {children: React.ReactNode}

export default function RootLayout({children}: Props) {
  return (
    <html lang="es">
      <head />
      <body>{children}</body>
    </html>
  )
}
