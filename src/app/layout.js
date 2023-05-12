import './globals.css'


export const metadata = {
  title: 'Royal China',
  description: 'Royal China, Chinese Restaurant in New Delhi',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
