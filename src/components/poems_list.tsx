import { PoemsResponse } from "./poem_container"

interface PoemsListProps {
  poems: PoemsResponse
}

export const PoemsList: React.FC<PoemsListProps> = () => {
  // receive the data on props and map over it here
  // you can use the Poem component for each item in the list
  return (
    <>
      <p>
        This is where you can map over the data to render a Poem for each item
      </p>
    </>
  )
}
