import Image from "next/image"
import Link from "next/link"
import "../animations.css"

export default function License() {
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
                CHUM BUCKET LICENSE
              </h1>
              <p className="text-white text-center max-w-2xl font-londrina text-xl mb-8">
                DECENTRALIZED GAMING ECOSYSTEM TERMS
              </p>
            </div>
          </div>
        </section>

        {/* License Content */}
        <section className="w-full py-16 bg-[#FFF4D9]">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-[#FF5A76]">
              <h2 className="text-4xl font-londrina text-[#FF5A76] mb-8 text-center">WEB3 GAMING LICENSE AGREEMENT</h2>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="text-2xl font-londrina text-[#0A85C2] mb-4">1. BLOCKCHAIN ECOSYSTEM RIGHTS</h3>
                  <p className="font-londrina text-lg leading-relaxed">
                    By participating in The Chum Bucket ecosystem, you are granted a non-exclusive, revocable license to
                    interact with our decentralized gaming platform. This includes the right to mint, trade, and collect
                    Lil Chummies NFTs, participate in smart contract-based challenges, and engage with our
                    community-driven governance protocols.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-londrina text-[#0A85C2] mb-4">2. NFT OWNERSHIP & DIGITAL ASSETS</h3>
                  <p className="font-londrina text-lg leading-relaxed">
                    All Lil Chummies and digital collectibles are minted as ERC-721 tokens on the blockchain. Ownership
                    is verified through your connected wallet address. You maintain full custody of your digital assets,
                    with the ability to transfer, trade, or sell them on compatible marketplaces. The Chum Bucket
                    retains intellectual property rights to the artwork and branding.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-londrina text-[#0A85C2] mb-4">3. SMART CONTRACT INTERACTIONS</h3>
                  <p className="font-londrina text-lg leading-relaxed">
                    Challenge participation involves interacting with audited smart contracts deployed on Ethereum
                    mainnet. Gas fees and transaction costs are your responsibility. All bets and wagers are executed
                    through transparent, immutable smart contracts with predetermined rules and automatic payouts based
                    on verifiable outcomes.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-londrina text-[#0A85C2] mb-4">4. DECENTRALIZED GOVERNANCE</h3>
                  <p className="font-londrina text-lg leading-relaxed">
                    CHUM token holders participate in decentralized autonomous organization (DAO) governance. Voting
                    rights are proportional to token holdings. Community proposals for new features, challenge types,
                    and ecosystem improvements are submitted and voted on through our governance portal. All decisions
                    are executed through multi-signature wallet protocols.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-londrina text-[#0A85C2] mb-4">5. YIELD FARMING & STAKING</h3>
                  <p className="font-londrina text-lg leading-relaxed">
                    Participants may stake CHUM tokens or provide liquidity to earn rewards. Staking contracts have
                    lock-up periods and slashing conditions clearly defined in the protocol. Yield farming opportunities
                    are subject to market conditions and smart contract risks. Always review contract addresses and
                    audit reports before participating.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-londrina text-[#0A85C2] mb-4">6. CROSS-CHAIN COMPATIBILITY</h3>
                  <p className="font-londrina text-lg leading-relaxed">
                    The Chum Bucket ecosystem supports multi-chain deployment across Ethereum, Polygon, and Arbitrum
                    networks. Bridge contracts enable asset transfers between chains. Users are responsible for
                    understanding bridge mechanics, fees, and potential risks associated with cross-chain transactions.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-londrina text-[#0A85C2] mb-4">7. REGULATORY COMPLIANCE</h3>
                  <p className="font-londrina text-lg leading-relaxed">
                    This platform operates in compliance with applicable blockchain regulations. Users must comply with
                    their local jurisdiction's laws regarding cryptocurrency, NFTs, and decentralized finance
                    activities. KYC/AML procedures may be required for certain high-value transactions or jurisdictions.
                  </p>
                </div>

                <div className="bg-[#FF5A76] bg-opacity-10 p-6 rounded-lg border-2 border-[#FF5A76]">
                  <h3 className="text-2xl font-londrina text-[#FF5A76] mb-4">IMPORTANT DISCLAIMER</h3>
                  <p className="font-londrina text-lg leading-relaxed">
                    Cryptocurrency and NFT investments carry inherent risks. Smart contracts, while audited, may contain
                    vulnerabilities. The Chum Bucket team is not liable for losses due to market volatility, smart
                    contract bugs, or user error. Always DYOR (Do Your Own Research) and never invest more than you can
                    afford to lose.
                  </p>
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="font-londrina text-gray-600 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
                <Link
                  href="/"
                  className="bg-[#0A85C2] text-white px-8 py-3 rounded-full font-londrina text-xl hover-bounce interactive-button"
                >
                  BACK TO THE BUCKET
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
