const Dashboard = () => {

    return (
      <div className="my-8 mx-8">
        <div className="card w-100 bg-base-100 drop-shadow-md">
          <div className="card-body items-center text-center">
            <h3 className="card-title mb-14">Beranda Tracking</h3>
            <div class="relative w-3/4 lg:w-2/4 mb-14">
              <input
                type="search"
                id="search-dropdown"
                class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-black-50 rounded-3xl border-l-black-100 border-l-2 border border-black-300"
                placeholder="Masukkan nama, no aju, komoditas, dsb"
                required
              />
              <button
                type="submit"
                class="absolute top-0 right-0 p-2.5 text-sm font-medium text-black bg-white-700 rounded-3xl border border-balck-700 hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
            </div>
  
            <div className="container my-5 mx-auto px-4 md:px-12">
              <div className="flex flex-wrap -mx-1 lg:-mx-4">
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-0 lg:px-4 lg:w-1/3">
                  <article className="overflow-hidden rounded-lg shadow-lg">
                    <a href="#">
                      <img
                        alt="Placeholder"
                        className="block h-auto w-full"
                        src="https://picsum.photos/600/400/?random"
                      />
                    </a>
                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                      <h1 className="text-lg">
                        <a
                          className="no-underline hover:underline text-black"
                          href="#"
                        >
                          Article Title
                        </a>
                      </h1>
                    </header>
                  </article>
                </div>
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-0 lg:px-4 lg:w-1/3">
                  <article className="overflow-hidden rounded-lg shadow-lg">
                    <a href="#">
                      <img
                        alt="Placeholder"
                        className="block h-auto w-full"
                        src="https://picsum.photos/600/400/?random"
                      />
                    </a>
                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                      <h1 className="text-lg">
                        <a
                          className="no-underline hover:underline text-black"
                          href="#"
                        >
                          Article Title
                        </a>
                      </h1>
                    </header>
                  </article>
                </div>
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-0 lg:px-4 lg:w-1/3">
                  <article className="overflow-hidden rounded-lg shadow-lg">
                    <a href="#">
                      <img
                        alt="Placeholder"
                        className="block h-auto w-full"
                        src="https://picsum.photos/600/400/?random"
                      />
                    </a>
                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                      <h1 className="text-lg">
                        <a
                          className="no-underline hover:underline text-black"
                          href="#"
                        >
                          Article Title
                        </a>
                      </h1>
                    </header>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Dashboard;
  