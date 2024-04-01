
export default function MovieCard({image,title}) {
  return (
    <div className="card">
        <img src={image}/>
        <h2>{title}</h2>
    </div>
  )
}
