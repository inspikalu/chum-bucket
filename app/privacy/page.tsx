import Image from "next/image"
import Link from "next/link"
import "../animations.css"

export default function Privacy() {
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
            href="/app-release.apk"
            className="bg-[#FF5A76] text-white px-4 py-1 rounded-full font-londrina text-sm hover-bounce interactive-button"
          >
            Download App
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full bg-[#0A85C2] py-16 overflow-hidden">
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
                PRIVACY POLICY
              </h1>
              <p className="text-white text-center max-w-2xl font-londrina text-xl mb-8">
                DECENTRALIZED PRIVACY PROTECTION
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="w-full py-16 bg-[#FFF4D9]">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-[#FF5A76]">
              <h2 className="text-4xl font-londrina text-[#FF5A76] mb-8 text-center">WEB3 PRIVACY COMMITMENT</h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="text-2xl font-londrina text-[#0A85C2] mb-4">1. DECENTRALIZED DATA PHILOSOPHY</h3>
                  <p className="font-londrina text-lg leading-relaxed">
                    The Chum Bucket operates on principles of decentralization and user sovereignty. We minimize data
                    collection and maximize user control over personal information. Your wallet address serves as your
                    primary identifier, and we never store private keys or seed phrases. All sensitive data is encrypted
                    and stored using decentralized protocols like IPFS and Arweave.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-londrina text-[#0A85C2] mb-4">2. BLOCKCHAIN TRANSPARENCY</h3>
                  <p className="font-londrina text-lg leading-relaxed">
                    All transactions, NFT ownership, and challenge participation are recorded on public blockchains.
                    While wallet addresses are pseudonymous, blockchain data is permanently visible and traceable. We do
                    not link wallet addresses to real-world identities unless required by law or voluntarily provided by
                    users for specific features like leaderboards or social connections.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-londrina text-[#0A85C2] mb-4">3. WALLET CONNECTION DATA</h3>
                  <p className="font-londrina text-lg leading-relaxed">
                    When you connect your Web3 wallet (MetaMask, WalletConnect, etc.), we temporarily access your wallet
                    address and token balances to verify eligibility for challenges and display your Lil Chummies
                    collection. We do not store wallet connection data permanently and cannot access your wallet without
                    explicit transaction approval.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-londrina text-[#0A85C2] mb-4">4. ZERO-KNOWLEDGE PROOFS</h3>
                  <p className="font-londrina text-lg leading-relaxed">
                    For privacy-sensitive challenges, we implement zero-knowledge proof systems that allow verification
                    of achievements without revealing underlying data. This enables features like anonymous betting,
                    private leaderboards, and confidential challenge completion while maintaining the integrity of our
                    gaming ecosystem.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-londrina text-[#0A85C2] mb-4">5. SOCIAL FEATURES & CONSENT</h3>
                  <p className="font-londrina text-lg leading-relaxed">
                    Friend connections, challenge invitations, and social interactions require explicit consent from
                    both parties. Users can control visibility of their activities, achievements, and collection through
                    granular privacy settings. All social data is encrypted and can be deleted at any time through our
                    decentralized identity management system.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-londrina text-[#0A85C2] mb-4">6. ANALYTICS & PERFORMANCE</h3>
                  <p className="font-londrina text-lg leading-relaxed">
                    We collect anonymized usage analytics to improve platform performance and user experience. This
                    includes page views, feature usage, and error reporting. All analytics data is aggregated and cannot
                    be traced back to individual users. We use privacy-focused analytics tools and never share raw data
                    with third parties.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-londrina text-[#0A85C2] mb-4">7. THIRD-PARTY INTEGRATIONS</h3>
                  <p className="font-londrina text-lg leading-relaxed">
                    Our platform integrates with various Web3 services including DEXs, NFT marketplaces, and oracle
                    networks. Each integration has its own privacy policy and data handling practices. We carefully vet
                    all partners and provide clear disclosure when data is shared with external services for
                    functionality purposes.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-londrina text-[#0A85C2] mb-4">8. REGULATORY COMPLIANCE</h3>
                  <p className="font-londrina text-lg leading-relaxed">
                    We comply with applicable privacy regulations including GDPR, CCPA, and emerging Web3 privacy
                    frameworks. Users have the right to access, modify, or delete their data. However, blockchain
                    transactions cannot be reversed or deleted due to the immutable nature of distributed ledgers. We
                    provide tools for data portability and account closure.
                  </p>
                </div>

                <div className="bg-[#FF5A76] bg-opacity-10 p-6 rounded-lg border-2 border-[#FF5A76]">
                  <h3 className="text-2xl font-londrina text-[#FF5A76] mb-4">YOUR PRIVACY RIGHTS</h3>
                  <p className="font-londrina text-lg leading-relaxed">
                    You maintain full control over your data and privacy settings. Use our decentralized identity
                    dashboard to manage permissions, review data usage, and configure privacy preferences. For privacy
                    concerns or data requests, contact our privacy team at privacy@chumbucket.app or submit a request
                    through our DAO governance portal.
                  </p>
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="font-londrina text-gray-600 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
                <Link
                  href="/"
                  className="bg-[#0A85C2] text-white px-8 py-3 rounded-full font-londrina text-xl hover-bounce interactive-button"
                >
                  DIVE BACK IN
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
