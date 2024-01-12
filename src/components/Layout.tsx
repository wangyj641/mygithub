import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './Header'
import Footer from './Footer'
import { cn } from '../lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'mygithub',
    description: 'Generated by create next app',
}

export default function Layout({
    children
}: {
    children: React.ReactNode, name: any
}) {

    return (
        <div className={cn('min-h-screen font-sans antialiased grainy', inter.className)}>
            <Header />
            <div className="flex h-full w-full">
                {children}
            </div>
            <Footer />
        </div>
    )
}
