'use client'
import Image from "next/image";
 
const pizzaMenu = [
  { id: 1, name: "Margherita Pizza", desc: "Cheese, fresh basil", price: 20.99, img: "/images/pizza1.png" },
  { id: 2, name: "Pepperoni Pizza", desc: "Spicy pepperoni, mozzarella", price: 25.99, img: "/images/pizza2.png" },
  { id: 3, name: "Farmhouse Pizza", desc: "Onion, capsicum, mushroom", price: 22.99, img: "/images/pizza3.png" },
  { id: 4, name: "Paneer Pizza", desc: "Cheese, paneer, fresh basil", price: 20.99, img: "/images/pizza4.png" },
  { id: 5, name: "Veggie Pizza", desc: "Onion, capsicum, mushroom, cheese", price: 22.99, img: "/images/pizza5.png" },
];

const burgerMenu = [
  { id: 1, name: "Classic Burger", desc: "Beef patty, cheese", price: 12.99, img: "/images/home.png" },
  { id: 2, name: "Chicken Burger", desc: "Grilled chicken, mayo", price: 14.99, img: "/images/burger5.png" },
  { id: 3, name: "Cheese Blast Burger", desc: "Double cheese, onion", price: 16.99, img: "/images/burger3.png" },
  { id: 4, name: "Double Cheese Burger", desc: "Double cheese, onion", price: 18.99, img: "/images/burger4.png" },
];

const sushiMenu = [
  { id: 1, name: "Rainbow Roll", desc: "Assorted vegetables, rice", price: 10.99, img: "/images/sushi1.png" },
  { id: 2, name: "California Roll", desc: "Assorted seafood, rice", price: 10.99, img: "/images/sushi2.jpg" },
  { id: 3, name: "Tuna Roll", desc: "Assorted seafood, rice", price: 10.99, img: "/images/sushi3.jpg" },
  { id: 4, name: "Spicy Tuna Roll", desc: "Assorted seafood, rice", price: 10.99, img: "/images/sushi4.jpg" },
];

const images = [
    "/images/roll1.webp",
    "/images/roll2.jpg",
    "/images/home2.jpg",
    "/images/home3.jpg",
    "/images/img2.jpg",
    "/images/home2.jpg",
  ];


function MenuSection({ title, highlight, data }) {
  return (
    <section className="relative bg-primary py-24 overflow-hidden">

      {/* LEFT ROUND IMAGE */}
      <div className="hidden xl:block absolute left-[-200px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full overflow-hidden border-[20px] border-white">
        <Image src="/images/left1.jpg" alt="food" fill className="object-cover" />
      </div>

      {/* RIGHT ROUND IMAGE */}
      <div className="hidden xl:block absolute right-[-200px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full overflow-hidden border-[20px] border-white">
        <Image src="/images/right1.jpg" alt="food" fill className="object-cover" />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#c9a24d] font-semibold uppercase tracking-widest">
            MENU CARD
          </p>

          <h2 className="text-white text-4xl md:text-5xl font-extrabold mt-4">
            OUR {title} <span className="text-[#c9a24d]">{highlight}</span>
          </h2>
        </div>

        {/* Menu List */}
        <div className="max-w-3xl mx-auto space-y-10">
          {data.map((item) => (
            <div key={item.id} className="flex items-center gap-6">

              <div className="w-16 h-16 rounded-full overflow-hidden 
                transition-transform duration-300 ease-in-out 
                hover:scale-110">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>


              <div className="flex-1">
                <div className="flex items-center">
                  <h3 className="text-white font-bold text-lg">
                    {item.name}
                  </h3>

                  <div className="flex-1 border-b border-dotted border-[#c9a24d] mx-4"></div>

                  <span className="text-[#c9a24d] font-bold text-lg">
                    ${item.price}
                  </span>
                </div>

                <p className="text-gray-400 text-sm mt-1">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function MenuPage() {
  return (
    <>
      <MenuSection title="PIZZA" highlight="MENU" data={pizzaMenu} />
      <MenuSection title="BURGER" highlight="MENU" data={burgerMenu} />
      <MenuSection title="SUSHI ROLLS &" highlight="MENU" data={sushiMenu} />
      <section className="bg-primary overflow-hidden">
      <div className="relative w-full">

        <div className="flex w-max animate-scroll gap-2">
          {[...images, ...images].map((img, index) => (
            <div
              key={index}
              className="w-[300px] h-[200px] flex-shrink-0 rounded-xl overflow-hidden"
            >
              <Image
                src={img}
                alt="food"
                width={300}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
    </>
  );
}

