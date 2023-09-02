import Image from "next/image"
import { Card, CardContent } from "./ui/card"

const ComputerSection = ({ urlImage }) => {

  return (
    <div className="flex flex-col w-full items-center gap-2">
      <h2 className="text-2xl font-semibold">Computer</h2>
      <Card className="w-40">
        <CardContent className="flex justify-center items-center p-6">
          <Image
            src={urlImage}
            width="50"
            height="50"
            alt="computer"
            className="justify-self-center"
          />
        </CardContent>
      </Card>
    </div>
  )
}

export default ComputerSection