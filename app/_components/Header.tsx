//imports
import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image
          className=""
          src="/logo-saloon.png"
          height={18}
          width={120}
          alt="logo"
        ></Image>
        <Button
          className="bg-transparent hover:text-purple-700"
          size="icon"
          variant="outline"
        >
          <MenuIcon className="text-purple-900" />
        </Button>
      </CardContent>
    </Card>
  )
}

export default Header
