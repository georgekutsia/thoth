
// eslint-disable-next-line react/prop-types
export default function BtnGallery({index, handleClick, url}) {
  return (
    <button key={index} >
    <img onClick={()=>handleClick()} src={url} alt={`carousel-img-${index}`} />
</button>
  )
}
