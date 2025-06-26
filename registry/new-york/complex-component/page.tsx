import * as React from "react"

import { PokemonCard } from "@/registry/new-york/complex-component/components/pokemon-card"
import { getPokemonList } from "@/registry/new-york/complex-component/lib/pokemon"

export default function Page() {
  const [pokemons, setPokemons] = React.useState<{
    results: { name: string }[]
  } | null>(null)

  React.useEffect(() => {
    async function fetchPokemon() {
      const result = await getPokemonList({ limit: 12 })
      setPokemons(result)
    }
    fetchPokemon()
  }, [])

  if (!pokemons) {
    return null
  }

  return (
    <div className="mx-auto w-full max-w-2xl px-4">
      <div className="grid grid-cols-2 gap-4 py-10 sm:grid-cols-3 md:grid-cols-4">
        {pokemons.results.map((p) => (
          <PokemonCard key={p.name} name={p.name} />
        ))}
      </div>
    </div>
  )
}
