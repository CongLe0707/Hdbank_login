import Navbar from "../dashboard/navbar";

const Home = () => {
  return (
    <><Navbar />
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
          <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-2xl text-center">
              <h1 className="text-3xl font-bold mb-4 text-red-600">Trang chủ</h1>
              <p className="text-gray-700 text-lg">Chào mừng bạn đến với HDBank!</p>
          </div>
    </div></>
  );
};

export default Home;
