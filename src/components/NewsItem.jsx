import defaultImg from "../assets/default_img.jpg"
const NewsItem = ({ title, description, src, url }) => {
  if (!title || title.trim() === "" || !url) {
    return null;
  }
  // const validSrc =src && src.trim() !== "" && src !== "None" ? src : defaultImg;
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block  my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px", height: "450px" }}>
      <img
        src={src && src.trim() !== "" && src !== "None" ? src : defaultImg}
        onError={(e) => { e.target.src = defaultImg; }}   // ✅ fallback if link broken
        style={{ height: "200px" }}
        className="card-img-top"
        alt="news"
      />
      <div className="card-body">
        <h5 className="card-title">{title?.slice(0, 50)}</h5>
        <p className="card-text">{description ? description.slice(0, 90) : "News is about current event.It is the information abouth something that has just happened."}</p>
        <a href={url} className="btn btn-primary">Read More</a>
      </div>
    </div>
  )
}

export default NewsItem