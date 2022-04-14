import Slider from './slider/slider';

import image1 from './../assets/sample1.jpeg';
import image2 from './../assets/sample2.jpeg';
import image3 from './../assets/sample3.jpeg';

const data = [
  {
    "id": 0,
    "title": "Best PRICE",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed pulvibar elit quis lacus dapibus, at efficitur ligula blandit. Phasellus dignissim et lorem vitae gravida. Nulam magna lacus, aliquam vel one.",
    "user": "Peter Amar",
    "url": image1
  },
  {
    "id": 1,
    "title": "Good Food",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed pulvibar elit quis lacus dapibus, at efficitur ligula blandit. Phasellus dignissim et lorem vitae gravida. Nulam magna lacus, aliquam vel two.",
    "user": "Peter Amir",
    "url": image2
  },
  {
    "id": 2,
    "title": "Fresh",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed pulvibar elit quis lacus dapibus, at efficitur ligula blandit. Phasellus dignissim et lorem vitae gravida. Nulam magna lacus, aliquam vel three.",
    "user": "Peter Amur",
    "url": image3
  }
]

const Dashboard = () => {
  return (
    <Slider items={data} />
  )
}

export default Dashboard;