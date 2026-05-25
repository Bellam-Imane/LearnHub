export default function CoursesCard({ title, icon, bgColor, date, size, layout }) {
  if (layout === 'list') {
    return (
      <article className="course-list-item">
        <div className="list-item-icon" style={{ backgroundColor: bgColor }}>{icon}</div>
        <h4 className="list-item-title">{title}</h4>
        <span className="list-item-date">{date}</span>
        <span className="list-item-size">{size}</span>
      </article>
    )
  }
  
  return (
    <article className="course-card">
      <div className="card-icon" style={{ backgroundColor: bgColor }}>{icon}</div>
      <h4>{title}</h4>
      <div className="card-footer">
        <span>{date}</span>
        <span>{size}</span>
      </div>
    </article>
  )
}
