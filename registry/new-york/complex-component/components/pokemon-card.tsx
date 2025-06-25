import { Card, CardContent } from "@/components/ui/card"
import { PokemonImage } from "@/registry/new-york/complex-component/components/pokemon-image"
import { usePokemon } from "@/registry/new-york/complex-component/hooks/use-pokemon"

export function PokemonCard({ name }: { name: string }) {
  const { pokemon, loading, error } = usePokemon(name)

  if (loading) {
    return <div>Loading...</div>
  }

  if (error || !pokemon) {
    return null
  }

  return (
    <Card>
      <CardContent className="flex flex-col items-center p-2">
        <div>
          <PokemonImage name={pokemon.name} number={pokemon.id} />
        </div>
        <div className="text-center font-medium">{pokemon.name}</div>
      </CardContent>
    </Card>
  )
}
