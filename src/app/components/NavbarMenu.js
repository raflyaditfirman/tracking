const Navbar = () => {
    return (
      <>
        <div className="w-full py-3 bg-white drop-shadow flex justify-between">
          <label className="text-sm ml-5">Tracking</label>
          <div className="text-sm mr-5 flex">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4.5 w-3.5 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              <a href="/" className="link">Beranda Menu</a>
          </div>
        </div>
      </>
    );
  };
  
  export default Navbar;