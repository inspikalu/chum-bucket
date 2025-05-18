import Image from "next/image"
import { Button } from "../ui/button"

function Nav() {
  return (
    <div className="mx-auto w-[70%] max-w-380 flex items-center justify-between">
      <Button>Menu</Button>
      <Image src={"/chumbucket.png"} alt="Logo" width={100} height={100} />
      <Button>Start a challenge</Button>
    </div>
  )
}

export default function Hero() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/under-the-sea.jpg" // Replace with your background image path
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Nav />
        <div className="text-center mt-20 space-y-6 text-white">
          <h2 className="text-4xl font-bold">Dive into Fun Challenges with Friends!</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Lock coins, compete with friends, and withdraw rewards at The Chum Bucket!
          </p>
          <Button className="">Start a challenge</Button>
        </div>
      </div>

      {/* Pop-up Images at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex justify-center">
        <div className="flex items-end justify-center gap-2 md:gap-4">
          {/* Image 1 */}
          <div className="relative h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 transform translate-y-4 hover:translate-y-0 transition-transform duration-300">
            <Image src="/character-1.png" alt="Character 1" width={160} height={160} className="object-contain" />
          </div>

          {/* Image 2 */}
          <div className="relative h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 transform translate-y-6 hover:translate-y-2 transition-transform duration-300">
            <Image src="/character-2.png" alt="Character 2" width={160} height={160} className="object-contain" />
          </div>

          {/* Image 3 */}
          <div className="relative h-28 w-28 md:h-36 md:w-36 lg:h-44 lg:w-44 transform translate-y-2 hover:translate-y-0 transition-transform duration-300">
            <Image src="/character-3.png" alt="Character 3" width={176} height={176} className="object-contain" />
          </div>

          {/* Image 4 */}
          <div className="relative h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 transform translate-y-6 hover:translate-y-2 transition-transform duration-300">
            <Image src="/character-4.png" alt="Character 4" width={160} height={160} className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  )
}
