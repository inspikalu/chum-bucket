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
            href="/signup"
            className="bg-[#FF5A76] text-white px-4 py-1 rounded-full font-londrina text-sm hover-bounce interactive-button"
          >
            Join the waitlist
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
                CHALLENGE YOUR FRIENDS, MAKE BETS, HAVE FUN!
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
                  CHALLENGE YOUR BUDDIES
                </h2>
                <p className="text-white font-londrina text-xl mb-6">
                  Connect with friends, create fun challenges, and place
                  friendly bets. The Chum Bucket makes hanging out with friends
                  even more exciting!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 hover-float">
                    <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-[#FF5A76] font-londrina badge-animate">
                      1
                    </div>
                    <p className="text-white font-londrina">
                      Add friends to your network
                    </p>
                  </div>
                  <div className="flex items-center gap-3 hover-float">
                    <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-[#FF5A76] font-londrina badge-animate">
                      2
                    </div>
                    <p className="text-white font-londrina">
                      Create fun challenges
                    </p>
                  </div>
                  <div className="flex items-center gap-3 hover-float">
                    <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-[#FF5A76] font-londrina badge-animate">
                      3
                    </div>
                    <p className="text-white font-londrina">
                      Place bets and track results
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
                  className="rounded-3xl shadow-xl border-4 border-white hover-float"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section id="challenges" className="w-full py-16 bg-[#FFF4D9]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-londrina text-[#FF5A76] mb-4 hover-pulse">
                BUCKET CHALLENGES
              </h2>
              <p className="text-gray-700 font-londrina text-xl max-w-2xl mx-auto">
                Create custom challenges or choose from our popular templates.
                Set stakes and have fun competing!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#FF5A76] card-hover">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-londrina text-[#FF5A76]">
                    THE CHUM CHALLENGE
                  </h3>
                  <div className="bg-[#FF5A76] text-white px-3 py-1 rounded-full font-londrina text-sm badge-animate">
                    POPULAR
                  </div>
                </div>
                <p className="font-londrina text-gray-700 mb-6">
                  Challenge your friends to complete daily tasks and track your
                  progress together.
                </p>
                <Link
                  href="/challenges/chum"
                  className="flex items-center justify-center gap-2 w-full bg-[#0A85C2] text-white py-2 rounded-full font-londrina hover-bounce interactive-button"
                >
                  <span>START NOW</span>
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
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-londrina text-[#FF5A76]">
                    BUCKET BETS
                  </h3>
                  <div className="bg-[#0A85C2] text-white px-3 py-1 rounded-full font-londrina text-sm badge-animate">
                    NEW
                  </div>
                </div>
                <p className="font-londrina text-gray-700 mb-6">
                  Place friendly bets with your buddies on anything from sports
                  to daily activities.
                </p>
                <Link
                  href="/challenges/bets"
                  className="flex items-center justify-center gap-2 w-full bg-[#0A85C2] text-white py-2 rounded-full font-londrina hover-bounce interactive-button"
                >
                  <span>PLACE A BET</span>
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

        {/* App Features */}
        <section className="w-full py-16 bg-[#0A85C2]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 flex justify-center">
                <div className="relative">
                  <Image
                    src="/GrAMhOKaAAAXdKi.jpeg"
                    alt="App Screenshots"
                    width={500}
                    height={300}
                    className="rounded-xl shadow-xl hover-float"
                  />
                  <div className="absolute -bottom-6 -right-2 bg-[#FF5A76] text-white p-4 rounded-full font-londrina transform rotate-12 hover-shake">
                    WOW!
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-5xl font-londrina text-white mb-6">
                  LIL CHUMMIES
                </h2>
                <p className="text-white font-londrina text-xl mb-8">
                  Earn cute virtual characters with every challenge you
                  complete. Collect them all and show off to your friends!
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                    <h3 className="text-2xl font-londrina text-white mb-2">
                      COLLECT
                    </h3>
                    <p className="text-white font-londrina">
                      Earn unique characters with every challenge
                    </p>
                  </div>
                  <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                    <h3 className="text-2xl font-londrina text-white mb-2">
                      TRADE
                    </h3>
                    <p className="text-white font-londrina">
                      Exchange characters with your friends
                    </p>
                  </div>
                  <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                    <h3 className="text-2xl font-londrina text-white mb-2">
                      DISPLAY
                    </h3>
                    <p className="text-white font-londrina">
                      Show off your collection to everyone
                    </p>
                  </div>
                  <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                    <h3 className="text-2xl font-londrina text-white mb-2">
                      UPGRADE
                    </h3>
                    <p className="text-white font-londrina">
                      Level up your characters with special tasks
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 bg-[#FF5A76]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-londrina text-white mb-6">
              CLAIM FREE LIL CHUMMIES
            </h2>
            <p className="text-white font-londrina text-xl mb-8 max-w-2xl mx-auto">
              Download The Chum Bucket app today and get started with 5 free Lil
              Chummies to kickstart your collection!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/download/ios"
                className="bg-white text-[#FF5A76] px-8 py-3 rounded-full font-londrina text-xl hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.54 9.103 1.519 12.09 1 1.45 2.211 3.09 3.792 3.039 1.52-.06 2.09-.986 3.926-.986 1.831 0 2.35.986 3.958.948 1.638-.026 2.677-1.488 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.599 1.09z"
                    fill="currentColor"
                  />
                  <path
                    d="M15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z"
                    fill="currentColor"
                  />
                </svg>
                <span>iOS APP</span>
              </Link>
              <Link
                href="/download/android"
                className="bg-white text-[#FF5A76] px-8 py-3 rounded-full font-londrina text-xl hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.523 15.342l2.094-3.642a.4.4 0 00-.145-.547.4.4 0 00-.547.146l-2.122 3.69a12.08 12.08 0 01-4.776-.976 12.08 12.08 0 01-4.776.976l-2.122-3.69a.4.4 0 00-.547-.146.4.4 0 00-.145.547l2.094 3.642C3.484 16.6 1.5 18.52 1.5 20.75v1.75c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-1.75c0-2.23-1.984-4.15-4.977-5.408z"
                    fill="currentColor"
                  />
                  <path
                    d="M4.5 16.75a1 1 0 100-2 1 1 0 000 2zM19.5 16.75a1 1 0 100-2 1 1 0 000 2zM15.1 2.75L16.748.398a.4.4 0 10-.692-.396l-1.674 2.396a9.61 9.61 0 00-4.764 0L7.944.002a.4.4 0 00-.692.396L8.9 2.75c-2.106 1.072-3.51 2.83-3.51 4.823 0 .097.007.192.01.288h13.2c.003-.096.01-.191.01-.288 0-1.992-1.404-3.75-3.51-4.823zM7.5 6.573a.75.75 0 110-1.5.75.75 0 010 1.5zM16.5 6.573a.75.75 0 110-1.5.75.75 0 010 1.5z"
                    fill="currentColor"
                  />
                </svg>
                <span>ANDROID APP</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="w-full py-16 bg-[#FFF4D9]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-londrina text-[#FF5A76] mb-4">
              WORD ON THE BUCKET
            </h2>
            <p className="text-gray-700 font-londrina text-xl mb-8 max-w-2xl mx-auto">
              Stay updated with the latest challenges, features, and Chum Bucket
              news!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-[#FF5A76]">
                <h3 className="text-2xl font-londrina text-[#FF5A76] mb-3">
                  CHUMMY CHALLENGE ALERT
                </h3>
                <p className="font-londrina text-gray-700 mb-4">
                  New weekly challenges are now available! Compete with friends
                  for exclusive rewards.
                </p>
                <Link
                  href="/news/challenges"
                  className="flex items-center justify-center gap-2 text-[#0A85C2] font-londrina"
                >
                  <span>READ MORE</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
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

              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-[#FF5A76]">
                <h3 className="text-2xl font-londrina text-[#FF5A76] mb-3">
                  CHUMMY COLLECTION EXPANDED
                </h3>
                <p className="font-londrina text-gray-700 mb-4">
                  10 new Lil Chummies have been added to the collection.
                  Discover how to earn them!
                </p>
                <Link
                  href="/news/collection"
                  className="flex items-center justify-center gap-2 text-[#0A85C2] font-londrina"
                >
                  <span>READ MORE</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
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

              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-[#FF5A76]">
                <h3 className="text-2xl font-londrina text-[#FF5A76] mb-3">
                  BUCKET BUDDIES FEATURE
                </h3>
                <p className="font-londrina text-gray-700 mb-4">
                  Connect with more friends and create group challenges with our
                  new social features.
                </p>
                <Link
                  href="/news/social"
                  className="flex items-center justify-center gap-2 text-[#0A85C2] font-londrina"
                >
                  <span>READ MORE</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
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

            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-full sm:rounded-l-full sm:rounded-r-none border-2 border-[#FF5A76] font-londrina focus:outline-none"
                />
                <button className="w-full sm:w-auto bg-[#FF5A76] text-white px-6 py-3 rounded-full sm:rounded-l-none sm:rounded-r-full font-londrina hover:bg-opacity-90 transition-opacity">
                  SUBSCRIBE
                </button>
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
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chumbucket-removebg-preview-DtDXyNbWgToBIytzJp8ua9Pbv0Y9aY.png"
                alt="The Chum Bucket Logo"
                width={60}
                height={60}
              />
              <h2 className="text-3xl font-londrina">THE CHUM BUCKET</h2>
            </div>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-white hover:text-[#FF5A76] transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-white hover:text-[#FF5A76] transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-white hover:text-[#FF5A76] transition-colors"
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
                className="text-white hover:text-[#FF5A76] transition-colors"
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
                    className="text-white hover:text-[#FF5A76] transition-colors font-londrina"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-[#FF5A76] transition-colors font-londrina"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-[#FF5A76] transition-colors font-londrina"
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
                    className="text-white hover:text-[#FF5A76] transition-colors font-londrina"
                  >
                    Merch
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-[#FF5A76] transition-colors font-londrina"
                  >
                    Collectibles
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-[#FF5A76] transition-colors font-londrina"
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
                    className="text-white hover:text-[#FF5A76] transition-colors font-londrina"
                  >
                    Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-[#FF5A76] transition-colors font-londrina"
                  >
                    Characters
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-[#FF5A76] transition-colors font-londrina"
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
                    className="text-white hover:text-[#FF5A76] transition-colors font-londrina"
                  >
                    Terms
                  </Link>
                </li> */}
                <li>
                  <Link
                    href="/license"
                    className="text-white hover:text-[#FF5A76] transition-colors font-londrina"
                  >
                    License
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-white hover:text-[#FF5A76] transition-colors font-londrina"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/copyright"
                    className="text-white hover:text-[#FF5A76] transition-colors font-londrina"
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
