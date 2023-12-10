import { Saira } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation/Navigation'
import Socials from '@/components/Navigation/Socials/Socials'

const saira = Saira({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata = {
  title: 'Midnight Tsunami',
  description: 'Sustainable art collaborations and spaces.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${saira.className}`}>
        <Navigation />
        <Socials />
        <div className=''>
          {children}
        </div>
      </body>
    </html>
  )
}
