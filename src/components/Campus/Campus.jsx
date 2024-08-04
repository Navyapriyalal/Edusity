import './Campus.css'
import gallery_img_1 from '../../assets/gallery-1.png'
import gallery_img_2 from '../../assets/gallery-2.png'
import gallery_img_3 from '../../assets/gallery-3.png'
import gallery_img_4 from '../../assets/gallery-4.png'
import white_arrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={gallery_img_1} alt="" />
        <img src={gallery_img_2} alt="" />
        <img src={gallery_img_3} alt="" />
        <img src={gallery_img_4} alt="" />
      </div>
      <button className='btn dark-btn'>See more here<img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus
