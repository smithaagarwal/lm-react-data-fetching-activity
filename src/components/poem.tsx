import { PoemData } from "./poem_container"

export const Poem: React.FC<PoemData> = ({
  id,
  title,
  body,
  author,
  isLiked,
}) => {
  return (
    <>
      <li key={id}>
        <h3>{title}</h3>
        <p>{body}</p>
        <p>{author}</p>
        <label>
          Like:{" "}
          <input
            className="tick-box"
            type="checkbox"
            id={id.toString()}
            checked={isLiked}
            onChange={() => {
              "this doesn't do anything yet!"
            }}
          />
        </label>
      </li>
    </>
  )
}
