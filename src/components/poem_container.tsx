import { useEffect } from "react"
import { PoemItem } from "../mock_api/data"
import { PoemsList } from "./poems_list"

export interface PoemData extends PoemItem {
  id: number
}
export type PoemsResponse = Array<PoemData>

export const PoemContainer: React.FC = () => {
  useEffect(() => {
    async function getPoems() {
      const data = await fetch("/poetriumph.com/api/v1/poems")
      const result: PoemsResponse = await data.json()
      console.log(result)
    }
    getPoems()
  }, [])

  return (
    <>
      <h2>Nature Poems: An Articifial Perspective</h2>
      <PoemsList />
    </>
  )
}
