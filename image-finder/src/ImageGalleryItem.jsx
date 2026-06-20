const ImageGalleryItem = ({ webformatURL, largeImageURL, onImageClick }) => {
  return (
    <li className="gallery-item" onClick={() => onImageClick(largeImageURL)}>
      <img src={webformatURL} alt="" className="gallery-item-image" />
    </li>
  );
};

export default ImageGalleryItem;