"use client";
import Image from "next/image";

/* ================= MENU DATA ================= */

const pizzaMenu = [
  { id: 1, name: "Margherita Pizza", desc: "Cheese, fresh basil", price: 20.99, img: "/images/pizza1.webp" },
  { id: 2, name: "Pepperoni Pizza", desc: "Spicy pepperoni, mozzarella", price: 25.99, img: "/images/pizza2.webp" },
  { id: 3, name: "Farmhouse Pizza", desc: "Onion, capsicum, mushroom", price: 22.99, img: "/images/pizza3.webp" },
  { id: 4, name: "Paneer Pizza", desc: "Cheese, paneer, fresh basil", price: 20.99, img: "/images/pizza4.webp" },
  { id: 5, name: "Veggie Pizza", desc: "Onion, capsicum, mushroom, cheese", price: 22.99, img: "/images/pizza5.webp" },
];

const burgerMenu = [
  { id: 1, name: "Classic Burger", desc: "Beef patty, cheese", price: 12.99, img: "/images/home.webp" },
  { id: 2, name: "Chicken Burger", desc: "Grilled chicken, mayo", price: 14.99, img: "/images/burger5.webp" },
  { id: 3, name: "Cheese Blast Burger", desc: "Double cheese, onion", price: 16.99, img: "/images/burger3.webp" },
  { id: 4, name: "Double Cheese Burger", desc: "Double cheese, onion", price: 18.99, img: "/images/burger4.webp" },
];

const sushiMenu = [
  { id: 1, name: "Rainbow Roll", desc: "Assorted vegetables, rice", price: 10.99, img: "/images/sushi1.webp" },
  { id: 2, name: "California Roll", desc: "Assorted seafood, rice", price: 10.99, img: "/images/sushi2.webp" },
  { id: 3, name: "Tuna Roll", desc: "Assorted seafood, rice", price: 10.99, img: "/images/sushi3.webp" },
  { id: 4, name: "Spicy Tuna Roll", desc: "Assorted seafood, rice", price: 10.99, img: "/images/sushi4.webp" },
];

const images = [
  "/images/roll1.webp",
  "/images/roll2.webp",
  "/images/home2.webp",
  "/images/home3.webp",
  "/images/img2.webp",
  "/images/home2.webp",
];

/* ================= REUSABLE SECTION ================= */

function MenuSection({ title, highlight, data }) {
  return (
    <section className="relative bg-primary py-20 md:py-24 overflow-hidden">

      {/* LEFT ROUND IMAGE */}
      <div
        className="hidden xl:block absolute 
        left-[-180px] 2xl:left-[-120px]
        top-1/2 -translate-y-1/2 
        w-[380px] h-[380px] 
        2xl:w-[420px] 2xl:h-[420px]
        rounded-full overflow-hidden 
        border-[18px] border-white"
      >
        <Image src="/images/left1.webp" alt="food" fill className="object-cover" />
      </div>

      {/* RIGHT ROUND IMAGE */}
      <div
        className="hidden xl:block absolute 
        right-[-180px] 2xl:right-[-120px]
        top-1/2 -translate-y-1/2 
        w-[380px] h-[380px] 
        2xl:w-[420px] 2xl:h-[420px]
        rounded-full overflow-hidden 
        border-[18px] border-white"
      >
        <Image src="/images/right1.webp" alt="food" fill className="object-cover" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-14">
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
                transition-transform duration-300 hover:scale-110">
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


/* ================= PAGE ================= */

export default function MenuPage() {
  return (
    <>
      <MenuSection title="PIZZA" highlight="MENU" data={pizzaMenu} />
      <MenuSection title="BURGER" highlight="MENU" data={burgerMenu} />
      <MenuSection title="SUSHI ROLLS &" highlight="MENU" data={sushiMenu} />

      {/* Bottom Scrolling Gallery */}
      <section className="bg-primary overflow-hidden py-16 2xl:py-24">
        <div className="relative w-full">
          <div className="flex max-w-[1600px] mx-auto animate-scroll gap-4 px-6">
            {[...images, ...images].map((img, index) => (
              <div
                key={index}
                className="w-[280px] h-[180px] 2xl:w-[340px] 2xl:h-[220px] 
                flex-shrink-0 rounded-xl overflow-hidden"
              >
                <Image
                  src={img}
                  alt="food"
                  width={340}
                  height={220}
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
