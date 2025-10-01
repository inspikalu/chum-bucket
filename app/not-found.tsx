import Image from "next/image"
import Link from "next/link"
import "./animations.css"

export default function NotFound() {
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
        {/* 404 Hero Section */}
        <section className="relative w-full bg-[#0A85C2] py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/under-the-sea.jpg')] bg-cover bg-center opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="relative mb-8">
                <Image
                  src="/chumbucket-removebg-preview.png"
                  alt="The Chum Bucket Logo"
                  width={120}
                  height={120}
                  className="logo-float opacity-50"
                />
                <div className="absolute -top-4 -right-4 bg-[#FF5A76] text-white p-3 rounded-full font-londrina transform rotate-12 hover-shake">
                  OOPS!
                </div>
              </div>

              <h1 className="text-8xl md:text-9xl font-londrina text-white text-center tracking-wide mb-4 hover-pulse">
                404
              </h1>

              <h2 className="text-4xl md:text-5xl font-londrina text-white text-center mb-6">BUCKET NOT FOUND!</h2>

              <p className="text-white text-center max-w-2xl font-londrina text-xl mb-8">
                Looks like this page got lost in the blockchain! Even our smartest Lil Chummies couldn't locate it in
                the decentralized web.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="bg-[#FF5A76] text-white px-8 py-3 rounded-full font-londrina text-xl hover-bounce interactive-button"
                >
                  RETURN TO BUCKET
                </Link>
                <Link
                  href="/#challenges"
                  className="bg-white text-[#0A85C2] px-8 py-3 rounded-full font-londrina text-xl hover-bounce interactive-button"
                >
                  EXPLORE CHALLENGES
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Error Details Section */}
        <section className="w-full py-16 bg-[#FF5A76]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="md:w-1/2">
                <h2 className="text-5xl font-londrina text-white mb-4 hover-pulse">LOST IN THE METAVERSE?</h2>
                <p className="text-white font-londrina text-xl mb-6">
                  Don't worry, chummy! This happens in decentralized networks. The page you're looking for might have
                  been moved to a different blockchain or doesn't exist in our current smart contract deployment.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 hover-float">
                    <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-[#FF5A76] font-londrina badge-animate">
                      1
                    </div>
                    <p className="text-white font-londrina">Check the URL for any typos or missing characters</p>
                  </div>
                  <div className="flex items-center gap-3 hover-float">
                    <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-[#FF5A76] font-londrina badge-animate">
                      2
                    </div>
                    <p className="text-white font-londrina">Navigate back to our homepage and try again</p>
                  </div>
                  <div className="flex items-center gap-3 hover-float">
                    <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-[#FF5A76] font-londrina badge-animate">
                      3
                    </div>
                    <p className="text-white font-londrina">Contact our DAO support if the issue persists</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative">
                  <div className="bg-white bg-opacity-20 p-8 rounded-3xl border-4 border-white hover-float">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🌊</div>
                      <h3 className="text-3xl font-londrina text-white mb-2">DEEP SEA ERROR</h3>
                      <p className="text-white font-londrina">
                        This page is swimming with the fishes in the digital ocean!
                      </p>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-[#FFF4D9] text-[#FF5A76] p-3 rounded-full font-londrina transform -rotate-12 hover-shake">
                    404!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Helpful Links Section */}
        <section className="w-full py-16 bg-[#FFF4D9]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-londrina text-[#FF5A76] mb-4 hover-pulse">POPULAR DESTINATIONS</h2>
              <p className="text-gray-700 font-londrina text-xl max-w-2xl mx-auto">
                While you're here, check out these popular areas of our decentralized ecosystem!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#FF5A76] card-hover">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">🎯</div>
                  <h3 className="text-3xl font-londrina text-[#FF5A76] mb-3">BUCKET CHALLENGES</h3>
                </div>
                <p className="font-londrina text-gray-700 mb-6 text-center">
                  Join our Web3 gaming challenges and compete with friends in our decentralized tournament system.
                </p>
                <Link
                  href="/#challenges"
                  className="flex items-center justify-center gap-2 w-full bg-[#0A85C2] text-white py-2 rounded-full font-londrina hover-bounce interactive-button"
                >
                  <span>EXPLORE CHALLENGES</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hover-shake"
                  >
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#FF5A76] card-hover">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">🎮</div>
                  <h3 className="text-3xl font-londrina text-[#FF5A76] mb-3">LIL CHUMMIES NFTs</h3>
                </div>
                <p className="font-londrina text-gray-700 mb-6 text-center">
                  Collect, trade, and showcase your unique NFT characters in our blockchain-powered ecosystem.
                </p>
                <Link
                  href="/#"
                  className="flex items-center justify-center gap-2 w-full bg-[#0A85C2] text-white py-2 rounded-full font-londrina hover-bounce interactive-button"
                >
                  <span>VIEW COLLECTION</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hover-shake"
                  >
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#FF5A76] card-hover">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">👥</div>
                  <h3 className="text-3xl font-londrina text-[#FF5A76] mb-3">BUCKET DAO</h3>
                </div>
                <p className="font-londrina text-gray-700 mb-6 text-center">
                  Join our decentralized community and help govern the future of The Chum Bucket ecosystem.
                </p>
                <Link
                  href="/#friends"
                  className="flex items-center justify-center gap-2 w-full bg-[#0A85C2] text-white py-2 rounded-full font-londrina hover-bounce interactive-button"
                >
                  <span>JOIN COMMUNITY</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hover-shake"
                  >
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Support Section */}
        <section className="w-full py-16 bg-[#0A85C2]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-londrina text-white mb-6">STILL LOST IN THE BLOCKCHAIN?</h2>
            <p className="text-white font-londrina text-xl mb-8 max-w-2xl mx-auto">
              Our Web3 support team is here to help! Reach out through our decentralized support channels and we'll get
              you back on track.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="mailto:support@chumbucket.app"
                className="bg-[#FF5A76] text-white px-8 py-3 rounded-full font-londrina text-xl hover-bounce interactive-button"
              >
                CONTACT SUPPORT
              </Link>
              <Link
                href="/"
                className="bg-white text-[#0A85C2] px-8 py-3 rounded-full font-londrina text-xl hover-bounce interactive-button"
              >
                BACK TO HOME
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#0A85C2] text-white py-8 border-t border-white border-opacity-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center gap-4 mb-6 md:mb-0">
              <Image
                src="/chumbucket-removebg-preview.png"
                alt="The Chum Bucket Logo"
                width={60}
                height={60}
                className="logo-float"
              />
              <h2 className="text-3xl font-londrina">THE CHUM BUCKET</h2>
            </div>
            <div className="flex gap-6">
              <Link href="#" className="text-white hover:text-[#FF5A76] transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </Link>
              <Link href="#" className="text-white hover:text-[#FF5A76] transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-white border-opacity-20">
            <p className="font-londrina">© {new Date().getFullYear()} THE CHUM BUCKET. ALL RIGHTS RESERVED.</p>
            <p className="font-londrina text-sm mt-2 opacity-75">
              Powered by Web3 • Built on the Blockchain • Decentralized Fun
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
