import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
function Home() {
  return (
    <div className="Home">
        <Carousel showArrows={true} swipeable={true} >
            <div>
                <img src="https://i.ibb.co/xmMZHB1/Matsya-Menu-AC-F-page-001.jpg" />
            </div>
            <div>
                <img src="https://i.ibb.co/9WhCZfh/Matsya-Menu-AC-F-page-002.jpg" />
            </div>
            <div>
                <img src="https://i.ibb.co/xSkrQKx/Matsya-Menu-AC-F-page-003.jpg" />
            </div>
            <div>
                <img src="https://i.ibb.co/Mh4jvhk/Matsya-Menu-AC-F-page-004.jpg" />
            </div>
            

        </Carousel>
    </div>
  );
}

export default Home;
