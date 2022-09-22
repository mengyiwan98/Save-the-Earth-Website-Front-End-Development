import './Style/Protection.css';
import Carousel from './Carousel';
import water from './Style/images/water.jpeg';
import energy from './Style/images/energy.jpeg';
import carbon from './Style/images/carbon.png';


function Protection() {
    const slides = [
        { src: "savewater.jpeg", alt: "savewater", },
        { src: "saveenergy.png", alt: "saveenergy", },
        { src: "ReduceCarbon.jpeg", alt: "reducecarbon", },
      ];
    
      return (
        <div className="app">
          <Carousel slides={slides}/>
          <h1 className='topic'>What We Need To Know About The Earth?</h1>
          <main>
        <div class="panel">
            <div class="store">
                <img src={water} alt="" class="store-img" />
                <h2 class="store-header">Save Water</h2>
                <ul class="store-features">
                    <li class="store-features-item">Clean, fresh water is a limited resource</li>
                    <li class="store-features-item">Less water usage means more savings</li>
                    <li class="store-features-item">The uses are endless</li>
                </ul>
                <a href="#" class="button">More</a>
            </div>
    
            <div class="store">
                <img src={energy} alt="" class="store-img" />
                <h2 class="store-header">Save Energy</h2>
                <ul class="store-features">
                    <li class="store-features-item">Improves Health and the Environment</li>
                    <li class="store-features-item">Adjust your day-to-day behaviors</li>
                    <li class="store-features-item">Save money and energy at home</li>
                </ul>
                <a href="#" class="button">More</a>
            </div>
    
            <div class="store">
                <img src={carbon} alt="" class="store-img" />
                <h2 class="store-header">Reduce Carbon</h2>
                <ul class="store-features">
                    <li class="store-features-item">help to ease pressure on healthcare systems</li>
                    <li class="store-features-item">Avoid Mass Market, Throw Away Fashion</li>
                    <li class="store-features-item">Switch to Green Energy.</li>
                </ul>
                <a href="#" class="button">More</a>
            </div>
    
        </div>
    </main>
        </div>
      );
    }
export default Protection;