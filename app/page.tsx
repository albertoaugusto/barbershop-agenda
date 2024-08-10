//imports
import Header from "./_components/Header"
import { Input } from "./_components/ui/input"
import { Button } from "./_components/ui/button"
import { SearchIcon } from "lucide-react"
import Image from "next/image"

const Home = () => {
  return (
    <div>
      {/*header*/}
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold text-purple-900">Olá, Alberto!</h2>
        <p className="text-purple-900">Segunda-feira, 08 de Agosto</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button className="bg-purple-900">
            <SearchIcon />
          </Button>
        </div>
        {/* banner */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner-example1.png"
            alt="banner"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
