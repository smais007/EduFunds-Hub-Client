import Lottie from "lottie-react";
import notFound from "../../public/notFound.json";

const NotFound = () => {
  const style = {
    width: "400px",
  };
  return (
    <div>
      <>
        <Lottie animationData={notFound} style={style} loop={true} />
      </>
    </div>
  );
};

export default NotFound;
