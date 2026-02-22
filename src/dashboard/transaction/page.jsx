// small note : keep transc fee etc in backend process only

export default function Transaction() {
  return (
    <section className="py-4 px-8">
      <div className=" min-w-10 max-w-full bg-slate-800 px-5 py-4 rounded-[14px]">
        {/* header */}

        <div className="flex md:flex-row md:gap-0 gap-4 flex-col justify-between mb-8 items-center">
          <h1 className="text-3xl font-bold">Transfer</h1>
        </div>
        <form>
          <input
            placeholder="Receiver 's Address"
            type="text"
            className="text-center p-4 min-w-full  text-[oklch(0.556_0_0)] bg-[oklch(0.97_0_0)] rounded-2xl active:outline-none focus:outline-none mb-8"
          ></input>

          <div className="  min-w-full rounded-2xl flex-col space-y-6 items-center p-4">
            {/* amount u want to send */}
            <div className="flex flex-row justify-between items-center ">
              {" "}
              <span className="font-medium text-2xl">Amount:</span>
              <input
                type="number"
                className=" p-4 min-w-8  bg-[oklch(0.97_0_0)] rounded-2xl outline-none text-[oklch(0.556_0_0)] [appearance:textfield] 
         [&::-webkit-outer-spin-button]:appearance-none
         [&::-webkit-inner-spin-button]:appearance-none "
              ></input>
            </div>
            {/* transfer fee , % depend on badge level */}
            <div className="flex flex-row justify-between items-center ">
              {" "}
              <span className="font-medium text-2xl">Transfer Fee:</span>
              <input
                type="text"
                value={`- 02%`}
                readOnly
                className=" p-4 min-w-8  bg-[oklch(0.97_0_0)] rounded-2xl outline-none text-[oklch(0.556_0_0)]   cursor-context-menu
           "
              ></input>
            </div>

            {/* amount detucted from your account in order to send  */}
            <div className="flex flex-row justify-between items-center ">
              {" "}
              <span className="font-medium text-2xl">Send:</span>
              <input
                type="text"
                value={`2040`}
                readOnly
                className=" p-4 min-w-8  bg-[oklch(0.97_0_0)] rounded-2xl outline-none text-[oklch(0.556_0_0)] cursor-context-menu
           "
              ></input>
            </div>

            <div className="flex justify-end">
              <button className="bg-blue-500 text-white px-4 py-2 rounded font-bold cursor-pointer">
                Transfer
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
