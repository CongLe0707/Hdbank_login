import Navbar from "../dashboard/navbar"

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-2xl text-center">
          <h1 className="text-3xl font-bold mb-4 text-red-600">Liên hệ</h1>
          <p className="text-gray-700 text-lg">Vui lòng liên hệ qua email: support@hdbank.com.vn</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
