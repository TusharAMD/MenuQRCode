import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
function Home() {
  return (
    <div className="Home">
        <Carousel showArrows={true} swipeable={true} >
            <div>
            <TransformWrapper>
                <TransformComponent>
                <img src="https://i.ibb.co/xmMZHB1/Matsya-Menu-AC-F-page-001.jpg" />
                </TransformComponent>
            </TransformWrapper>
            </div>
            <div>
            <TransformWrapper>
                <TransformComponent>
                <img src="https://i.ibb.co/9WhCZfh/Matsya-Menu-AC-F-page-002.jpg" />
                </TransformComponent>
            </TransformWrapper>
            </div>
            <div>
            <TransformWrapper>
                <TransformComponent>
                <img src="https://i.ibb.co/xSkrQKx/Matsya-Menu-AC-F-page-003.jpg" />
                </TransformComponent>
            </TransformWrapper>
            </div>
            <div>
                <img src="https://i.ibb.co/Mh4jvhk/Matsya-Menu-AC-F-page-004.jpg" />
            </div>
            <div>
                <img src="https://i.ibb.co/Cs5mftN/Matsya-Menu-AC-F-page-005.jpg" />
            </div>
            <div>
                <img src="https://i.ibb.co/CncvcGV/Matsya-Menu-AC-F-page-006.jpg" />
            </div>
            <div>
                <img src="https://i.ibb.co/x7n7ZmL/Matsya-Menu-AC-F-page-007.jpg" />
            </div>
            <div>
                <img src="https://i.ibb.co/h8DTv3d/Matsya-Menu-AC-F-page-008.jpg" />
            </div>
            

        </Carousel>
    </div>
  );
}

export default Home;
