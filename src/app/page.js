

export default function Home() {
  return (
      <div className="hero min-h-screen">

        <div className="hero-overlay"></div>
        <div className="navbar place-self-start w-screen pt-8 z-1">
          <div className="flex bg-fuchsia-200 border-shadow p-4 opacity-40 w-screen glass">
            <a className="btn btn-ghost text-4xl text-black">SoFab</a>
          </div>
        </div>

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
  );
}
