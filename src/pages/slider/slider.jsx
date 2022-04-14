import { useState } from "react";
import "./slider.styles.scss";

const Slider = ({items}) => {

  const [ currentIndex, setCurrentIndex ] = useState(0)
  const [ item, setItem ] = useState(items)

  const prevButton = () => {
    if (currentIndex-1 < 0) setCurrentIndex(item.length - 1)
    else setCurrentIndex(currentIndex - 1)
  }

  const nextButton = () => {
    if(currentIndex+1 > item.length-1) setCurrentIndex(0)
    else setCurrentIndex(currentIndex + 1)
  }

  return (
    <div className="container">
      <div className="image-container">
        { items.map((menu, index) => (
          <img 
            key={index}
            src={menu.url} 
            alt={`Images ${menu.id}`}
            className={`image-review ${currentIndex === index ? 'fade' : ''}`}
          />
        ))}
      </div>
      <div className="review-container">
        <h1>Reviews</h1>
        <hr className="title-line" />

        <div className="slider" >
          <button
            onClick={prevButton}
            className="slider-control prev"
          > ❮ </button>

          { items.map((menu, index) => (
            <div key={index} className={`detail-review ${currentIndex === index ? 'fade' : ''}`}>
              <h3>{menu.title}</h3>
              <i className="fas fa-quote-right" />
              <p className="text-review">{menu.description}</p>
              <h3 className="text-review"> - {menu.user}</h3>
            </div>
          ))}
                    
          <button
            onClick={nextButton}
            className="slider-control next"
          > ❯ </button>
        </div>

        <div className="dot-container">
          { items.map((menu, index) => (
            <span 
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Slider;