import { PoemsResponse } from "./poem_container";
import { Poem } from "./poem";

interface PoemsListProps {
  poems: PoemsResponse;
}

export const PoemsList: React.FC<PoemsListProps> = (props) => {
  const poems = props.poems.map((poem) => <Poem key={poem.id} poem={poem} />);
  return poems;
};
