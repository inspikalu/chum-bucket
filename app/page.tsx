import Image from "next/image";
import Link from "next/link";
import "./animations.css";

export default function Home() {
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
          <Link
            href="#challenges"
            className="text-white font-londrina text-lg nav-link-hover"
          >
            Challenges
          </Link>
          <Link
            href="#friends"
            className="text-white font-londrina text-lg nav-link-hover"
          >
            Friends
          </Link>
          <Link
            href="#shop"
            className="text-white font-londrina text-lg nav-link-hover"
          >
            Shop
          </Link>
          <Link
            href="#about"
            className="text-white font-londrina text-lg nav-link-hover"
          >
            About
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          {/* <Link
            href="/login"
            className="bg-white text-[#0A85C2] px-4 py-1 rounded-full font-londrina text-sm hover-bounce interactive-button"
          >
            LOG IN
          </Link> */}
          <Link
            href="/app-release.apk"
            className="bg-[#FF5A76] text-white px-4 py-1 rounded-full font-londrina text-sm hover-bounce interactive-button"
          >
            Download App
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full bg-[#0A85C2] py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/under-the-sea.jpg')] bg-cover bg-center opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/chumbucket-removebg-preview.png"
                alt="The Chum Bucket Logo"
                width={150}
                height={150}
                className="mb-6 logo-float"
              />
              <h1 className="text-6xl md:text-8xl font-londrina text-white text-center tracking-wide mb-4 hover-pulse">
                THE CHUM BUCKET
              </h1>
              <p className="text-white text-center max-w-2xl font-londrina text-xl mb-8">
                CHALLENGE YOUR FRIENDS, BET CHUM TOKENS, WIN BIG!
              </p>
              <div className="flex gap-4">
                <Link
                  href="/app-release.apk"
                  className="bg-white text-[#0A85C2] px-8 py-3 rounded-full font-londrina text-xl hover-bounce interactive-button"
                >
                  Download App
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Friends Section */}
        <section id="friends" className="w-full py-16 bg-[#FF5A76]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="md:w-1/2">
                <h2 className="text-5xl font-londrina text-white mb-4 hover-pulse">
                  CHALLENGE YOUR FRIENDS
                </h2>
                <p className="text-white font-londrina text-xl mb-6">
                  Add friends using their name and wallet address or .sol domain, set up challenges, and lock CHUM tokens for bets. The Chum Bucket makes competing with friends simple, social, and rewarding!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 hover-float">
                    <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-[#FF5A76] font-londrina badge-animate">
                      1
                    </div>
                    <p className="text-white font-londrina">
                      Add friends using wallet or .sol domain
                    </p>
                  </div>
                  <div className="flex items-center gap-3 hover-float">
                    <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-[#FF5A76] font-londrina badge-animate">
                      2
                    </div>
                    <p className="text-white font-londrina">
                      Set up fun challenges
                    </p>
                  </div>
                  <div className="flex items-center gap-3 hover-float">
                    <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-[#FF5A76] font-londrina badge-animate">
                      3
                    </div>
                    <p className="text-white font-londrina">
                      Bet CHUM tokens and keep each other on track
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <Image
                  src="/GrAMgEQW4AAB9wT.jpeg"
                  alt="Friends Challenge Screen"
                  width={300}
                  height={600}
                  className="rounded-3xl shadow-2xl hover-float"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section id="challenges" className="w-full py-16 bg-[#0A85C2]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
              <div className="md:w-1/2">
                <h2 className="text-5xl font-londrina text-white mb-4 hover-pulse">
                  LOCK COINS, WIN BIG
                </h2>
                <p className="text-white font-londrina text-xl mb-6">
                  Add your friend's email or wallet, lock your CHUM tokens, and agree on the challenge. Winner takes the pot—minus our small 1% fee (capped at $10).
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 hover-float">
                    <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-[#0A85C2] font-londrina badge-animate">
                      1
                    </div>
                    <p className="text-white font-londrina">
                      Choose a friend and set the challenge
                    </p>
                  </div>
                  <div className="flex items-center gap-3 hover-float">
                    <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-[#0A85C2] font-londrina badge-animate">
                      2
                    </div>
                    <p className="text-white font-londrina">
                      Lock CHUM tokens for the bet
                    </p>
                  </div>
                  <div className="flex items-center gap-3 hover-float">
                    <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-[#0A85C2] font-londrina badge-animate">
                      3
                    </div>
                    <p className="text-white font-londrina">
                      Challenger signs to release funds to winner
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <Image
                  src="/challenges.jpeg"
                  alt="Challenges Screen"
                  width={300}
                  height={600}
                  className="rounded-3xl shadow-2xl hover-float"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Shop Section */}
        <section id="shop" className="w-full py-16 bg-[#FF5A76]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="md:w-1/2">
                <h2 className="text-5xl font-londrina text-white mb-4 hover-pulse">
                  FAIR AND TRANSPARENT WINS
                </h2>
                <p className="text-white font-londrina text-xl mb-6">
                  Challenger signs to release funds to the winner. We keep 1% as a fee (up to $10), stored publicly, with 50% for the team and 50% for Solana user airdrops.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 hover-float">
                    <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-[#FF5A76] font-londrina badge-animate">
                      1
                    </div>
                    <p className="text-white font-londrina">
                      Publicly stored fees
                    </p>
                  </div>
                  <div className="flex items-center gap-3 hover-float">
                    <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-[#FF5A76] font-londrina badge-animate">
                      2
                    </div>
                    <p className="text-white font-londrina">
                      50% to team
                    </p>
                  </div>
                  <div className="flex items-center gap-3 hover-float">
                    <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-[#FF5A76] font-londrina badge-animate">
                      3
                    </div>
                    <p className="text-white font-londrina">
                      50% to Solana user airdrops
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <Image
                  src="/fair-winds.jpeg"
                  alt="Shop Screen"
                  width={300}
                  height={600}
                  className="rounded-3xl shadow-2xl hover-float"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-16 bg-[#0A85C2]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
              <div className="md:w-1/2">
                <h2 className="text-5xl font-londrina text-white mb-4 hover-pulse">
                  ABOUT THE CHUM BUCKET
                </h2>
                <p className="text-white font-londrina text-xl mb-6">
                  Dive into The Chum Bucket, where friends challenge each other with bets in CHUM tokens on Solana. Set up dares, lock coins, and enjoy fair, transparent wins with minimal fees.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 hover-float">
                    <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-[#0A85C2] font-londrina badge-animate">
                      1
                    </div>
                    <p className="text-white font-londrina">
                      Powered by Solana blockchain
                    </p>
                  </div>
                  <div className="flex items-center gap-3 hover-float">
                    <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-[#0A85C2] font-londrina badge-animate">
                      2
                    </div>
                    <p className="text-white font-londrina">
                      Use CHUM tokens for bets
                    </p>
                  </div>
                  <div className="flex items-center gap-3 hover-float">
                    <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-[#0A85C2] font-londrina badge-animate">
                      3
                    </div>
                    <p className="text-white font-londrina">
                      Simple, social, and rewarding challenges
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <Image
                  src="/about.jpeg"
                  alt="About Screen"
                  width={300}
                  height={600}
                  className="rounded-3xl shadow-2xl hover-float"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#FF5A76] px-4 py-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <Link href="/" className="flex items-center gap-2 mb-4 md:mb-0">
              <Image
                src="/chumbucket-removebg-preview.png"
                alt="The Chum Bucket Logo"
                width={50}
                height={50}
                className="object-contain logo-float"
              />
              <span className="sr-only">The Chum Bucket</span>
            </Link>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-white hover:text-[#0A85C2] transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-white hover:text-[#0A85C2] transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-londrina mb-4">THE TEAM</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-[#0A85C2] transition-colors font-londrina"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-[#0A85C2] transition-colors font-londrina"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-[#0A85C2] transition-colors font-londrina"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-londrina mb-4">SHOP</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-[#0A85C2] transition-colors font-londrina"
                  >
                    Merch
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-[#0A85C2] transition-colors font-londrina"
                  >
                    Collectibles
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-[#0A85C2] transition-colors font-londrina"
                  >
                    Gift Cards
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-londrina mb-4">BUCKET LORE</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-[#0A85C2] transition-colors font-londrina"
                  >
                    Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-[#0A85C2] transition-colors font-londrina"
                  >
                    Characters
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-[#0A85C2] transition-colors font-londrina"
                  >
                    Universe
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-londrina mb-4">LEGAL</h3>
              <ul className="space-y-2">
                {/* <li>
                  <Link
                    href="#"
                    className="text-white hover:text-[#0A85C2] transition-colors font-londrina"
                  >
                    Terms
                  </Link>
                </li> */}
                <li>
                  <Link
                    href="/license"
                    className="text-white hover:text-[#0A85C2] transition-colors font-londrina"
                  >
                    License
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-white hover:text-[#0A85C2] transition-colors font-londrina"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/copyright"
                    className="text-white hover:text-[#0A85C2] transition-colors font-londrina"
                  >
                    Copyright
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-white border-opacity-20">
            <p className="font-londrina">
              © {new Date().getFullYear()} THE CHUM BUCKET. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}