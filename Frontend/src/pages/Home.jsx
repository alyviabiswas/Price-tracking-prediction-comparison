import React, { useState } from "react";

const Home = () => {

  const [itemSearch, setItemSearch] = useState('');
  const [linkSearch, setLinkSearch] = useState('');
  const [results, setResults] = useState([]);

  const handleItemSearch = async () => {
    const mockData = [
      {
        _id: "1",
        name: "Realme 11x 5G",
        price: 12999,
        link: "https://www.flipkart.com/realme-11x-5g-midnight-black-128-gb/p/itm07be1a2ff1a1b?pid=MOBGS2WFP7X8263G",
        image: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708666969/Croma%20Assets/Communication/Mobiles/Images/300088_0_t5dmom.png"
      },
      {
        _id: "2",
        name: "iPhone 15 Pro Max",
        price: 172900,
        link: "https://www.amazon.in/iPhone-16-Pro-Max-TB/dp/B0DGJD75G2/ref=asc_df_B0DGJD75G2?mcid=ed70be1e527e38fd835e1018b14a7665&tag=googleshopdes-21&linkCode=df0&hvadid=709962856229&hvpos=&hvnetw=g&hvrand=1709997326729505921&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9299567&hvtargid=pla-2384980006306&gad_source=1&th=1",
        image: "https://m.media-amazon.com/images/I/81dT7CUY6GL.jpg"
      }
    ];

    const filtered = mockData.filter(product =>
      product.name.toLowerCase().includes(itemSearch.toLowerCase())
    );
    setResults(filtered);

    // if (!itemSearch) return;
    // const res = await fetch(`http://localhost:5000/api/products/search/name?q=${itemSearch}`);
    // const data = await res.json();
    // console.log("Search by name result:", data);
    // setResults(data);
  };

  const handleLinkSearch = async () => {
    const mockData = [
      {
        _id: "1",
        name: "Realme 11x 5G",
        price: 12999,
        link: "https://www.flipkart.com/realme-11x-5g-midnight-black-128-gb/p/itm07be1a2ff1a1b?pid=MOBGS2WFP7X8263G",
        image: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708666969/Croma%20Assets/Communication/Mobiles/Images/300088_0_t5dmom.png"
      },
      {
        _id: "2",
        name: "iPhone 15 Pro Max",
        price: 172900,
        link: "https://www.amazon.in/iPhone-16-Pro-Max-TB/dp/B0DGJD75G2/ref=asc_df_B0DGJD75G2?mcid=ed70be1e527e38fd835e1018b14a7665&tag=googleshopdes-21&linkCode=df0&hvadid=709962856229&hvpos=&hvnetw=g&hvrand=1709997326729505921&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9299567&hvtargid=pla-2384980006306&gad_source=1&th=1://example.com/iphone-15pro",
        image: "https://m.media-amazon.com/images/I/81dT7CUY6GL.jpg"
      }
    ];

    const product = mockData.find(p => p.link === linkSearch);
    setResults(product ? [product] : []);

    // if (!linkSearch) return;
    // const res = await fetch(`http://localhost:5000/api/products/search/link?url=${linkSearch}`);
    // const data = await res.json();
    // console.log("Search by link result:", data);
    // setResults(data);
  };

  return (
    <div>

      <div
        className="h-[480px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/7947663/pexels-photo-7947663.jpeg?auto=compress&cs=tinysrgb&w=600')`,
        }}
      >

        <div className="absolute inset-0"></div>


        <div className="relative text-center text-black max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-6">
            Welcome To Smart Spending
          </h1>
          <p className="text-xl text-gray-900 font-bold mb-8">
            Spot price patterns here, like a shopping Sherlock.
          </p>
          <div className="space-x-4">
            <div className="space-y-6">
              <a
                href="/items"
                className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-700 transition duration-300"
              >
                Explore Products
              </a>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <input
                  type="text"
                  value={itemSearch}
                  onChange={(e) => setItemSearch(e.target.value)}
                  placeholder="Search item by name..."
                  className="px-4 py-2 w-72 bg-black text-gray-300 rounded-md border border-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
                />
                <button
                  onClick={handleItemSearch}
                  className="bg-yellow-500 text-black px-5 py-2 rounded-md hover:bg-yellow-600 transition">
                  Search
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <input
                  type="text"
                  value={linkSearch}
                  onChange={(e) => setLinkSearch(e.target.value)}
                  placeholder="Paste product link..."
                  className="px-4 py-2 w-72 bg-black text-gray-300 rounded-md border border-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
                />
                <button
                  onClick={handleLinkSearch}
                  className="bg-yellow-500 text-black px-5 py-2 rounded-md hover:bg-yellow-600 transition">
                  Search
                </button>
              </div>

              {/* ✅ Search results section */}
              {results.length > 0 && (
                <div className="mt-8 text-center">
                  <h2 className="text-2xl font-bold mb-4">Search Results:</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
                    {results.map((product) => (
                      <div key={product._id} className="bg-white p-4 rounded shadow">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-40 object-cover rounded mb-2"
                        />
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                        <p className="text-gray-600">₹{product.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>
      </div>


      <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Discover More
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Explore perfect matches for your style and budget, then save smarter with price predictions!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;