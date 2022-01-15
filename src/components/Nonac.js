import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import {useState} from 'react'; 
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';

function Nonac() {
  
  
  return (
    

        <AwesomeSlider fillParent={true} mobileTouch={true}>
            <div>
                <img src="https://i.ibb.co/HXrrVgX/Matsya-Menu-Non-AC-F-page-001.jpg" />
            </div>
            <div>
                <img src="https://i.ibb.co/6ygSpDd/Matsya-Menu-Non-AC-F-page-002.jpg" />
            </div>
            <div>
                <img src="https://i.ibb.co/WcYNwrf/Matsya-Menu-Non-AC-F-page-003.jpg" />
            </div>
            <div>
                <img src="https://i.ibb.co/jWGs20g/Matsya-Menu-Non-AC-F-page-004.jpg" />
            </div>
            <div>
                <img src="https://i.ibb.co/59vfkx9/Matsya-Menu-Non-AC-F-page-005.jpg" />
            </div>
            <div>
                <img src="https://i.ibb.co/Yj2W5Ng/Matsya-Menu-Non-AC-F-page-006.jpg" />
            </div>
            <div>
                <img src="https://i.ibb.co/RCpyFqd/Matsya-Menu-Non-AC-F-page-007.jpg" />
            </div>
            
            <div>
                <img src="https://i.ibb.co/ngM79GM/Matsya-Menu-Non-AC-F-page-008.jpg" />
            </div>
        </AwesomeSlider>

  );
}

export default Nonac;
