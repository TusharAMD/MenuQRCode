i
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import {useState} from 'react'; 
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';
import { Item, AppContainer, ExtraInfo, Code } from "./components";
import Carousel from "./Carousel";
function Home() {
  
  return (
    
        <>
        <AwesomeSlider fillParent={true} mobileTouch={true}>
            <div>
                <img src="https://i.ibb.co/zRdZKKq/Matsya-Menu-AC-F-page-001.jpg" />
            </div>
            <div>
                <img src="https://i.ibb.co/QPSMN54/Matsya-Menu-AC-F-page-002.jpg" />
            </div>
            <div>
                <img src="https://i.ibb.co/Jp14XMS/Matsya-Menu-AC-F-page-003.jpg" />
            </div>
            <div>
                <img src="https://i.ibb.co/8c3hpML/Matsya-Menu-AC-F-page-004.jpg" />
            </div>
            <div>
                <img src="https://i.ibb.co/2FwBbCL/Matsya-Menu-AC-F-page-005.jpg" />
            </div>
            <div>
                <img src="https://i.ibb.co/C6nzjYs/Matsya-Menu-AC-F-page-006.jpg" />
            </div>
            <div>
                <img src="https://i.ibb.co/NLdFVML/Matsya-Menu-AC-F-page-007.jpg" />
            </div>
            
            <div>
                <img src="https://i.ibb.co/1s1FbN9/Matsya-Menu-AC-F-page-008.jpg" />
            </div>
        </AwesomeSlider>
        <AppContainer>
      <h2>
        <a
          target="_blank"
          href="https://github.com/FormidableLabs/react-swipeable"
        >
          react-swipeable
        </a>{" "}
        v5.3.0
      </h2>
      <p>
        <b>V6.0.0 has been released:&nbsp;</b>
        <a
          target="_blank"
          href="https://github.com/FormidableLabs/react-swipeable/releases/tag/v6.0.0"
        >
          release notes
        </a>
        &nbsp;|&nbsp;
        <a
          target="_blank"
          href="https://codesandbox.io/s/react-swipeable-image-carousel-hben8?file=/src/Carousel.js"
        >
          Updated Sandbox
        </a>
      </p>
      <p>
        Carousel impliments <Code>useSwipeable</Code> hook to track touch/swipe
      </p>
      <Carousel title="Carousel">
        <Item img="https://unsplash.it/475/205" />
        <Item img="https://unsplash.it/476/205" />
        <Item img="https://unsplash.it/477/205" />
        <Item img="https://unsplash.it/478/205" />
        <Item img="https://unsplash.it/479/205" />
      </Carousel>
      <ExtraInfo>
        <p>
          View example using the <code>&lt;Swipeable/&gt;</code> component.
        </p>
        <p>
          Go to this{" "}
          <a
            href="https://codesandbox.io/s/4q7n429vl4?module=%2Fsrc%2FCarousel.js"
            target="_blank"
          >
            codesandbox
          </a>
          .
        </p>
      </ExtraInfo>
    </AppContainer>
        </>

  );
}

export default Home;
