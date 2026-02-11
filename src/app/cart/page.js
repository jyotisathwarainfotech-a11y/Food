'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../../context/CartContext';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice, getTotalItems } = useCart();
  const [promoCode, setPromoCode] = useState('');

  const subtotal = getTotalPrice();
  const tax = subtotal * 0.08;
  const shipping = subtotal > 100 ? 0 : 15.99;
  const total = subtotal + tax + shipping;

  const applyPromoCode = () => {
    // Promo code logic would go here
    console.log('Applying promo code:', promoCode);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-primary to-secondary py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-secondary rounded-full">
              <ShoppingBag className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Your Shopping Cart</h1>
              <p className="text-secondary">
                {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'} in your cart
              </p>
            </div>
          </div>
        </div>

        {cartItems.length === 0 ? (
          // Empty Cart State
          <div className="text-center py-16 rounded-2xl">
            <div className="text-8xl mb-6">🛒</div>
            <h2 className="text-3xl font-bold text-primary mb-4">Your cart is empty</h2>
            <p className="text-secondary mb-8 max-w-md mx-auto">
              Looks like you haven't added anything to your cart yet. Start shopping to discover delicious meals!
            </p>
            <Link 
              href="/"
              className="inline-flex items-center bg-secondary hover:bg-primary text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Browse Menu
            </Link>
          </div>
        ) : (
          // Cart Items
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items List */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-orange-50 to-amber-50">
                  <h2 className="text-xl font-bold text-primary flex items-center gap-2">
                    <ShoppingBag className="h-6 w-6 text-secondary" />
                    Cart Items ({getTotalItems()})
                  </h2>
                </div>
                
                <div className="divide-y divide-gray-100">
                  {cartItems.map((item, index) => (
                    <div key={index} className="p-6 hover:bg-orange-50/50 transition-colors">
                      <div className="flex flex-col sm:flex-row gap-6">
                        {/* Product Image */}
                        <div className="flex-shrink-0">
                          <div className="h-24 w-24 rounded-xl overflow-hidden bg-gray-200 border-2 border-orange-100">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.src = '/images/home.png';
                              }}
                            />
                          </div>
                        </div>
                        
                        {/* Product Info */}
                        <div className="flex-grow">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
                              <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
                                {item.category || 'Food Item'}
                              </div>
                              
                              {/* Quantity Controls */}
                              <div className="flex items-center gap-3">
                                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                                  <button
                                    onClick={() => updateQuantity(item.name, item.quantity - 1)}
                                    className="p-2 hover:bg-gray-100 transition-colors"
                                  >
                                    <Minus className="h-4 w-4" />
                                  </button>
                                  <span className="px-4 py-2 border-x border-gray-300 font-medium min-w-[40px] text-center">
                                    {item.quantity}
                                  </span>
                                  <button
                                    onClick={() => updateQuantity(item.name, item.quantity + 1)}
                                    className="p-2 hover:bg-gray-100 transition-colors"
                                  >
                                    <Plus className="h-4 w-4" />
                                  </button>
                                </div>
                                
                                <button
                                  onClick={() => removeFromCart(item.name)}
                                  className="flex items-center gap-2 text-red-500 hover:text-red-700 hover:bg-red-50 px-3 py-2 rounded-lg transition-colors"
                                >
                                  <Trash2 className="h-4 w-4" />
                                  <span className="hidden sm:inline">Remove</span>
                                </button>
                              </div>
                            </div>
                            
                            {/* Price */}
                            <div className="text-right">
                              <div className="text-2xl font-bold text-orange-600">
                                ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                              </div>
                              <div className="text-gray-500 text-sm">
                                {item.price} each
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <div className="w-2 h-6 bg-gradient-to-b from-orange-500 to-amber-500 rounded-full"></div>
                  Order Summary
                </h2>
                
                {/* Promo Code */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Promo Code
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter promo code"
                      className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                    <button
                      onClick={applyPromoCode}
                      className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-3 rounded-lg font-medium transition-colors whitespace-nowrap"
                    >
                      Apply
                    </button>
                  </div>
                </div>
                
                {/* Price Breakdown */}
                <div className="space-y-4 mb-6 bg-orange-50 rounded-xl p-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax (8%)</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      Shipping {shipping === 0 ? '(Free over $100)' : ''}
                    </span>
                    <span className="font-medium">
                      {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-orange-600">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                {/* Checkout Button */}
                <Link
                  href="/checkout"
                  className="block w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold py-4 rounded-xl text-center transition-all duration-300 mb-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Proceed to Checkout
                </Link>
                
                {/* Secure Payment Info */}
                <div className="text-center text-sm text-gray-500">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Secure Checkout</span>
                  </div>
                  <p>We accept all major credit cards and PayPal</p>
                </div>
              </div>
              
              {/* Need Help */}
              <div className="mt-6 bg-gradient-to-br from-gray-50 to-orange-50 rounded-2xl p-6 border border-orange-100">
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <div className="w-2 h-6 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
                  Need Help?
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Our customer service team is here to help you with any questions about your order.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center text-gray-600">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">📞</span>
                    </div>
                    (123) 456-7890
                  </div>
                  <div className="flex items-center text-gray-600">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                      <span className="text-purple-600 font-bold">@</span>
                    </div>
                    help@fooddelight.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}