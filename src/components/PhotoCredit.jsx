export default function PhotoCredit({ photo, detailed = false }) {
  if (!photo) return null;
  return (
    <span className={`image-credit ${detailed ? "image-credit-detailed" : ""}`}>
      {photo.sourceUrl ? (
        <a
          href={photo.sourceUrl}
          target="_blank"
          rel="noreferrer"
          title={
            photo.photographer
              ? `Verified image credit: ${photo.photographer}`
              : "Source publisher; individual photographer not verified"
          }
        >
          {photo.credit} ↗
        </a>
      ) : (
        <span>{photo.credit}</span>
      )}
    </span>
  );
}
