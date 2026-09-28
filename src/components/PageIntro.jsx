export default function PageIntro({
  eyebrow,
  title,
  children
}) {
  return <div className="page-intro"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{children}</p></div>;
}
