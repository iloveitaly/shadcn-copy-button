import { useEffect, useState } from "react"
import { getPokemon, getPokemonList } from "@/registry/new-york/complex-component/lib/pokemon"

// Totally unnecessary hook, but it's a good example of how to use a hook in a custom registry.

export function usePokemonImage(number: number) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`
}

export function usePokemon(name: string) {
  const [pokemon, setPokemon] = useState<Awaited<ReturnType<typeof getPokemon>>>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    setLoading(true)
    getPokemon(name)
      .then(setPokemon)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [name])

  return { pokemon, loading, error }
}

export function usePokemonList(limit?: number) {
  const [pokemonList, setPokemonList] = useState<Awaited<ReturnType<typeof getPokemonList>>>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    setLoading(true)
    getPokemonList({ limit })
      .then(setPokemonList)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [limit])

  return { pokemonList, loading, error }
}
