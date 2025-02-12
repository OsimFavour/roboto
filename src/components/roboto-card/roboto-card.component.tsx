import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"

type RobotoCardProps = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  type: string;
}

const RobotoCard = ({ id, name, description, type }: RobotoCardProps) => {
  return (
    <Card 
      key={id}
      className="w-full max-w-sm mx-auto overflow-hidden transition-all duration-300 hover:shadow-lg bg-[#2A2A2A] text-gray-200 border-gray-700"
    >
      <div className="relative h-48 w-full overflow-hidden">
      <img
        alt={`monster ${name}`} 
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        className="w-full h-full object-cover transition-all duration-300 hover:scale-110"
      />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-bold text-white">{name}</CardTitle>
          <Badge variant="secondary" className="text-xs bg-gray-700 text-gray-300">
            {type}
          </Badge>
        </div>
        <CardDescription className="line-clamp-2 text-gray-400">{description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-center">
        
        <Button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-6 px-8">Learn More</Button>
        
      </CardFooter>
    </Card>
  )
}

export default RobotoCard

