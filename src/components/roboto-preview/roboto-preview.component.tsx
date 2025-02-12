import RobotoCard from "../roboto-card/roboto-card.component"

const robots = [
  {
    id: "1",
    name: "Dracolich",
    description: "An undead dragon of immense power, combining the might of a dragon with the resilience of a lich.",
    imageUrl: "/placeholder.svg?height=300&width=400",
    type: "Undead Dragon",
  },
  {
    id: "2",
    name: "Kraken",
    description: "A gigantic sea monster with tentacles capable of dragging entire ships into the depths.",
    imageUrl: "/placeholder.svg?height=300&width=400",
    type: "Sea Monster",
  },
  {
    id: "3",
    name: "Chimera",
    description: "A monstrous fire-breathing hybrid creature with parts from multiple animals.",
    imageUrl: "/placeholder.svg?height=300&width=400",
    type: "Hybrid Beast",
  },
  {
    id: "4",
    name: "Dracolich",
    description: "An undead dragon of immense power, combining the might of a dragon with the resilience of a lich.",
    imageUrl: "/placeholder.svg?height=300&width=400",
    type: "Undead Dragon",
  },
  {
    id: "5",
    name: "Kraken",
    description: "A gigantic sea monster with tentacles capable of dragging entire ships into the depths.",
    imageUrl: "/placeholder.svg?height=300&width=400",
    type: "Sea Monster",
  },
  {
    id: "6",
    name: "Chimera",
    description: "A monstrous fire-breathing hybrid creature with parts from multiple animals.",
    imageUrl: "/placeholder.svg?height=300&width=400",
    type: "Hybrid Beast",
  },
]

const RobotoPreview = () => {
  return (
    <div className="min-h-screen text-gray-200">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Roboto Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {robots.map((monster, index) => (
            <RobotoCard key={index} {...monster} />
          ))}
        </div>

      </div>
    </div>
  )
}

export default RobotoPreview

