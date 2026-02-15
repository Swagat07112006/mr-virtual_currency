import { Link } from "react-router-dom";

export default function VerifyEmail() {
  return (
    <div className="flex justify-center items-center h-screen text-white  ">
      <div className="bg-slate-800 p-10 rounded-md text-center shadow-xl shadow-slate-900 max-w-md">
        <h1 className="text-2xl font-bold mb-4">Almost There!</h1>
        <p className="mb-6">
          We sent a confirmation email to your inbox. <br />
          Please click the link in the email to activate your account.
        </p>
        <Link to="/signin">
          <button className="bg-slate-700 text-[18px] py-2 px-6 rounded-[10px] shadow shadow-indigo-800 cursor-pointer hover:bg-slate-600 ">
            Go to Sign In
          </button>
        </Link>
      </div>
    </div>
  );
}
