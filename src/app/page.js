import Image from "next/image";

export default function Home() {
  return (
<div className="flex bg-fuchsia-200 h-screen">




      <div className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}>
        
        <div className="navbar place-self-start w-screen pt-8">
        <div className="flex bg-emerald-300 border-4 border-fuchsia-900  p-4 opacity-60 w-screen">
          <a className="btn btn-ghost text-4xl text-black">SoFab</a>
        </div>
        </div>

        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-emerald-300">Get Started</button>
          </div>
        </div>

    </div>
    



</div> 

  );
}
