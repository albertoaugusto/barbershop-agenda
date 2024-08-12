//imports
import Header from "./_components/Header"
import Image from "next/image"
//shadcn
import { Input } from "./_components/ui/input"
import { Button } from "./_components/ui/button"
import { Card, CardContent } from "./_components/ui/card"
import { SearchIcon } from "lucide-react"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"

const Home = () => {
  return (
    <div>
      {/*header*/}
      <Header />
      {/* text */}
      <div className="p-5">
        <h2 className="text-xl font-bold text-purple-900">Olá, Alberto!</h2>
        <p className="text-purple-900">Segunda-feira, 08 de Agosto</p>
        {/* input */}
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
      {/*schedules*/}
      <Card className="ml-5 mr-5 mt-1 border border-purple-300">
        <CardContent className="flex justify-between p-0">
          {/* left div */}
          <div className="flex flex-col gap-2 py-5 pl-5">
            <Badge className="w-fit bg-purple-500 text-purple-900">
              Confirmado
            </Badge>
            <h3 className="font-semibold text-purple-900">Alongamneto</h3>

            {/* avatar and saloon */}
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
              </Avatar>
              <p className="text-sm text-purple-900">Nails Designer</p>
            </div>
          </div>
          {/* right div */}
          <div className="flex flex-col items-center justify-center border-l border-solid border-purple-300 px-5">
            <p className="text-sm text-purple-900">Agosto</p>
            <p className="text-2xl text-purple-900">05</p>
            <p className="text-sm text-purple-900">20:00</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Home
