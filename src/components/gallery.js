function Gallery({ images }) {
  return (
    <div>
      {images.map((img, index) => (
        <img key={index} src={img} alt="gallery" />
      ))}
    </div>
  );
}

export default Gallery;