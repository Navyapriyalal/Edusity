import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translate(${tx}%)`;
  }

  const slideBackward = () => {
    if (tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translate(${tx}%)`;
  }

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Samantha Roberts</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was a transformative experience. The innovative curriculum, dedicated faculty, and vibrant campus life have all played a crucial role in shaping my academic and personal growth.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Olivia Smith</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Enrolling at Edusity has proven to be an excellent choice. The comprehensive curriculum, unparalleled support system, and emphasis on experiential learning have significantly contributed to my growth and success as a student.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>James Lee</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>My time at Edusity has been nothing short of extraordinary. The diverse community, cutting-edge research facilities, and commitment to fostering innovation have profoundly impacted my academic and professional development.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
