import Image from "next/image"
import Link from "next/link"
import "../animations.css"

export default function Copyright() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-[#0A85C2] px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/chumbucket-removebg-preview.png"
              alt="The Chum Bucket Logo"
              width={50}
              height={50}
              className="object-contain logo-float"
            />
            <span className="sr-only">The Chum Bucket</span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="/#challenges" className="text-white font-londrina text-lg nav-link-hover">
            Challenges
          </Link>
          <Link href="/#friends" className="text-white font-londrina text-lg nav-link-hover">
            Friends
          </Link>
          <Link href="/#shop" className="text-white font-londrina text-lg nav-link-hover">
            Shop
          </Link>
          <Link href="/#about" className="text-white font-londrina text-lg nav-link-hover">
            About
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/signup"
            className="bg-[#FF5A76] text-white px-4 py-1 rounded-full font-londrina text-sm hover-bounce interactive-button"
          >
            Join the waitlist
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full bg-[#FF5A76] py-16 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/under-the-sea.jpg')] bg-cover bg-center opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/chumbucket-removebg-preview.png"
                alt="The Chum Bucket Logo"
                width={120}
                height={120}
                className="mb-6 logo-float"
              />
              <h1 className="text-5xl md:text-7xl font-londrina text-white text-center tracking-wide mb-4 hover-pulse">
                COPYRIGHT NOTICE
              </h1>
              <p className="text-white text-center max-w-2xl font-londrina text-xl mb-8">
                PROTECTING OUR DIGITAL ECOSYSTEM
              </p>
            </div>
          </div>
        </section>

        {/* Copyright Content */}
        <section className="w-full py-16 bg-[#FFF4D9]">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-[#FF5A76]">
              <h2 className="text-4xl font-londrina text-[#FF5A76] mb-8 text-center">INTELLECTUAL PROPERTY RIGHTS</h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="text-2xl font-londrina text-[#0A85C2] mb-4">1. CHUM BUCKET BRAND OWNERSHIP</h3>
                  <p className="font-londrina text-lg leading-relaxed">
                    The Chum Bucket™ name, logo, branding, and all associated visual elements are protected by copyright
                    and trademark laws. All rights reserved to The Chum Bucket DAO and its community stakeholders.
                    Unauthorized use of our brand assets in competing platforms or commercial ventures is strictly
                    prohibited without explicit written consent.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-londrina text-[#0A85C2] mb-4">2. LIL CHUMMIES NFT ARTWORK</h3>
                  <p className="font-londrina text-lg leading-relaxed">
                    All Lil Chummies character designs, artwork, and metadata are original creations protected under
                    international copyright law. While NFT holders own the token and have usage rights for personal,
                    non-commercial purposes, the underlying intellectual property remains with The Chum Bucket
                    ecosystem. Commercial licensing available through our DAO governance process.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-londrina text-[#0A85C2] mb-4">3. SMART CONTRACT CODE</h3>
                  <p className="font-londrina text-lg leading-relaxed">
                    Our smart contract architecture, including challenge mechanics, reward algorithms, and tokenomics
                    formulas, represents proprietary technology developed by The Chum Bucket team. While deployed
                    contracts are publicly viewable on-chain, the codebase is protected under software copyright.
                    Forking or copying our contracts for competing projects requires proper attribution and licensing.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-londrina text-[#0A85C2] mb-4">4. COMMUNITY-GENERATED CONTENT</h3>
                  <p className="font-londrina text-lg leading-relaxed">
                    User-generated challenges, custom bet parameters, and community proposals submitted to our platform
                    grant The Chum Bucket ecosystem a perpetual, royalty-free license to use, modify, and distribute
                    such content. Original creators retain ownership but allow ecosystem-wide usage. All submissions
                    must be original work or properly licensed.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-londrina text-[#0A85C2] mb-4">5. OPEN SOURCE COMPONENTS</h3>
                  <p className="font-londrina text-lg leading-relaxed">
                    Certain components of our platform utilize open-source libraries and protocols. We maintain
                    compliance with all applicable licenses including MIT, Apache 2.0, and GPL. Attribution and license
                    information for all open-source dependencies are available in our public repository documentation.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-londrina text-[#0A85C2] mb-4">6. DMCA COMPLIANCE</h3>
                  <p className="font-londrina text-lg leading-relaxed">
                    The Chum Bucket respects intellectual property rights and complies with the Digital Millennium
                    Copyright Act (DMCA). If you believe your copyrighted work has been used without permission, please
                    submit a takedown notice to our designated copyright agent. We will investigate all valid claims
                    promptly and take appropriate action.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-londrina text-[#0A85C2] mb-4">7. FAIR USE & PARODY</h3>
                  <p className="font-londrina text-lg leading-relaxed">
                    Our platform may contain references, parodies, or transformative content related to popular culture,
                    memes, or other intellectual properties under fair use doctrine. Such content is used for
                    commentary, criticism, or parody purposes and does not constitute trademark or copyright
                    infringement. All fair use content is clearly identified and attributed where appropriate.
                  </p>
                </div>

                <div className="bg-[#0A85C2] bg-opacity-10 p-6 rounded-lg border-2 border-[#0A85C2]">
                  <h3 className="text-2xl font-londrina text-[#0A85C2] mb-4">COPYRIGHT ENFORCEMENT</h3>
                  <p className="font-londrina text-lg leading-relaxed">
                    We actively monitor for unauthorized use of our intellectual property across web3 platforms,
                    marketplaces, and social media. Violations may result in takedown requests, legal action, and
                    permanent bans from our ecosystem. Report suspected infringement to copyright@chumbucket.app for
                    investigation.
                  </p>
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="font-londrina text-gray-600 mb-4">
                  Copyright © {new Date().getFullYear()} The Chum Bucket DAO. All rights reserved.
                </p>
                <Link
                  href="/"
                  className="bg-[#FF5A76] text-white px-8 py-3 rounded-full font-londrina text-xl hover-bounce interactive-button"
                >
                  RETURN TO BUCKET
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#0A85C2] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center gap-4 mb-6 md:mb-0">
              <Image src="/chumbucket-removebg-preview.png" alt="The Chum Bucket Logo" width={60} height={60} />
              <h2 className="text-3xl font-londrina">THE CHUM BUCKET</h2>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-londrina mb-4">LEGAL</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/license" className="text-white hover:text-[#FF5A76] transition-colors font-londrina">
                    License
                  </Link>
                </li>
                <li>
                  <Link href="/copyright" className="text-white hover:text-[#FF5A76] transition-colors font-londrina">
                    Copyright
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-white hover:text-[#FF5A76] transition-colors font-londrina">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-white border-opacity-20">
            <p className="font-londrina">© {new Date().getFullYear()} THE CHUM BUCKET. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
