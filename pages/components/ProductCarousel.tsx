import { useState } from 'react';

interface Product {
  name: string;
  brand: string;
  price: string;
  description: string;
  image: string;
}

const ProductCarousel: React.FC<{ products: Product[] }> = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {products.map((product, index) => (
            <div key={index} className="min-w-full flex justify-center">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover rounded-t-2xl"
                />
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{product.name}</h3>
                  <p className="text-gray-600 mb-2">{product.brand}</p>
                  <p className="text-2xl font-bold text-primary mb-4">{product.price}</p>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <button className="w-full bg-primary text-white py-3 rounded-full hover:bg-green-600 transition text-lg font-medium">
                    In den Warenkorb
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevProduct}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-primary text-white p-3 rounded-full hover:bg-green-600"
      >
        ←
      </button>
      <button
        onClick={nextProduct}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-primary text-white p-3 rounded-full hover:bg-green-600"
      >
        →
      </button>
      <div className="flex justify-center mt-4">
        {products.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${
              index === currentIndex ? 'bg-primary' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
