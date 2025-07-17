const Home = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-theme-headerbg dark:bg-themedark-headerbg bg-opacity-80 backdrop-blur-md shadow z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-primary ">
            logo
          </a>
          <div className=" flex items-center space-x-6 text-lg">
            <a href="#" className="">
              Inicio
            </a>
            <div>
              <a href="/login" className="btn btn-primary">
                Iniciar sesion
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="w-full h-screen relative pt-20 flex items-center justify-center overflow-hidden bg-theme-bodybg dark:bg-themedark-bodybg"
      >
        <div className="relative z-20 text-center max-w-3xl px-6">
          <h1 className="text-5xl font-extrabold mb-4 !text-primary">
            Bienvenido
          </h1>
          <p className="text-xl text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            recusandae obcaecati! Doloremque porro neque, mollitia perspiciatis
            dolorum architecto corrupti illo distinctio aspernatur aperiam
            aliquam consequatur facere optio suscipit itaque natus.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
