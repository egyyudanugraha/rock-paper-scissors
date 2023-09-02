import Image from "next/image"
import { Card, CardContent } from "./ui/card"

const SelectAction = ({ name, selected, handleSelect }) => {

  return (
    <Card 
          className={`w-40 cursor-pointer ${selected === name && 'border-2 border-slate-900'}`}
          name={name}
          onClick={() => handleSelect(name)}
        >
          <CardContent className="flex justify-center items-center p-6">
            <Image
              src={`/${name}.png`}
              width="50"
              height="50"
              alt="computer"
              className="justify-self-center"
            />
          </CardContent>
        </Card>
  )
}

export default SelectAction