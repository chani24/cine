import './globals.css'


export const metadata = {
  title: 'Cine',
  description: 'Behind the silver screen',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
