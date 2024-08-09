import Rating from "../assets/rating.png";
import RatingHalf from "../assets/rating-half.png";
import ImaTem from "../assets/temp-1.jpeg";
import Icon from "../assets/play-button.png";

const Banner = () => {
  return (
    <div className="w-full h-[720px] bg-banner bg-no-repeat bg-center relative">
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-30" />
      <div className="w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-20">
        <div className="flex flex-col items-baseline space-y-5 w-2/4">
          <p className="text-white bg-gradient-to-r from-red-600 to-white py-1 px-3 text-md">
            TV Show
          </p>
          <div className="flex flex-col space-y-4">
            <h2 className="text-white text-2xl font-bold">Nghe nói em thích tôi</h2>
            <div className="flex items-center space-x-3">
              <img src={Rating} alt="rating" className="w-8 h-8" />
              <img src={Rating} alt="rating" className="w-8 h-8" />
              <img src={Rating} alt="rating" className="w-8 h-8" />
              <img src={Rating} alt="rating" className="w-8 h-8" />
              <img src={RatingHalf} alt="ratinghalf" className="w-8 h-8" />
            </div>
            <p className="text-white">
              cảm ơn anh, video rất hay, hi vọng a sẽ ra thêm những video dự án
              thực tế như thế này
            </p>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-white bg-black font-bold text-sm">
                Chi tiết
              </button>
              <button className="p-2 text-white bg-red-600 font-bold text-sm">
                Xem phim
              </button>
            </div>
          </div>
        </div>
        <div className="w-2/4 flex justify-center">
          <div className="w-[300px] h-[400px] relative group cursor-pointer">
            <img src={ImaTem} alt="imag" className="w-full h-full object-cover"/>
            
            <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 
            group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <img src={Icon} alt="play button " className="w-16 h-16 relative z-20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
