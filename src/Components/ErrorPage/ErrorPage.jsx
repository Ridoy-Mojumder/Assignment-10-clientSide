
import { useEffect, useState } from "react";

const NotFoundPage = () => {
  const [swingX, setSwingX] = useState(0);

  useEffect(() => {
    const swingInterval = setInterval(() => {
      setSwingX((prevX) => (prevX === 100 ? -100 : 100));
    }, 2000);

    return () => clearInterval(swingInterval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300">
      <h1 className="text-9xl font-bold mb-6 relative">
        404
        <span
          className="absolute top-0 left-0 text-black filter blur-sm"
          style={{
            transform: `scale(1.05) translate3d(0, 12%, -10vmin) translate(${swingX * 0.05}%)`,
          }}
        >
          404
        </span>
      </h1>
      <div className="cloak__wrapper text-center">
        <div className="cloak__container">
          <div
            className="cloak"
            style={{
              transform: `rotate(${swingX * -0.25}deg)`,
            }}
          ></div>
          <div className="info">
            <h2 className="text-3xl font-semibold mb-4">
              We can't find that page
            </h2>
            <p className="text-lg mb-8">
              We're fairly sure that page used to be here, but seems to have
              gone missing. We do apologize on its behalf.
            </p>
            <a
              href="/"
              rel="noreferrer noopener"
              className="bg-blue-500 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-600 transition duration-300"
            >
              Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
