import { useLocation } from "react-router-dom"

function ListDetail() {
  const location = useLocation()

  return (
    <>
      <div>Title ToDoList - {location.state.title}</div>
      <hr />
      <div>Content ToDoList - {location.state.content}</div>
    </>
  )
}

export default ListDetail
