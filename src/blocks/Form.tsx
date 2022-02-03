export default () => {
  return (
    <form className="txt-gray-800 w-[300px]">
        <h1 className="text-green-400 my-4 text-center font-semibold text-4xl">order details</h1>
      <input type="text" placeholder="name" className="bg-slate-100 w-full py-1 px-2 m-1" />
      <input type="number"  placeholder="phone number" className="bg-slate-100 w-full py-1 px-2 m-1" />
      <br />
<textarea className="bg-slate-100 w-full h-20 py-1 px-2 m-1">address</textarea>
<br />
<button className="bg-green-500 w-full text-center m-1 p-2 text-white font-bold text-xl">order</button>
    </form>
  );
};
