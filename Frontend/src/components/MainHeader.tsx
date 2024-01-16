import { Link } from "react-router-dom";

const MainHeader = () => {

  return (
    <div className="bg-blue-800 py-6">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">HotelBooking</Link>
        </span>
       
      </div>
    </div>
  );
};

export default MainHeader;
