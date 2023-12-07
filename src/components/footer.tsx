export const Footer: React.FC = () => {
  function handleClearLocalStorage() {
    localStorage.removeItem("mirage-poem-data")
  }
  return (
    <footer>
      <button className="clear-local-storage" onClick={handleClearLocalStorage}>
        🧹 Clear Local Storage 🧹
      </button>
    </footer>
  )
}
