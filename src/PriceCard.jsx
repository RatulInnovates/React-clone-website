import React from 'react'

function PriceCard() {
  return (
    <div>
       

<div class="m-10 w-80 rounded-lg border-2 border-gray-100 py-8 px-6 shadow-lg shadow-gray-200">
  <p class="text-lg font-bold">Essential</p>
  <p class="text-sm font-semibold text-gray-500">Covers all your basic needs</p>
  <p class="mt-3 text-4xl font-bold">$65</p>
  <p class="text-sm font-semibold text-gray-500">Per Agent per month</p>
  <button class="mt-4 w-full bg-[#fff] text-black rounded-lg border-2 border-black px-10 py-2 text-sm font-semibold hover:bg-black hover:text-white cursor-pointer">Request a free demo</button>
  <ul class="mt-4 space-y-2 font-semibold">
    <li class="flex items-center space-x-4"><span class="h-2 w-2 rounded-full bg-black"></span><span>250 calls per month</span></li>
    <li class="flex items-center space-x-4"><span class="h-2 w-2 rounded-full bg-black"></span><span>4 mediums</span></li>
    <li class="flex items-center space-x-4"><span class="h-2 w-2 rounded-full bg-black"></span><span>10 users</span></li>
  </ul>
  <hr class="my-4" />
  <ul class="space-y-2 font-semibold">
    <li class="flex items-center space-x-2 text-rose-600">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" fill="none" viewBox="0 0 20 20" stroke="currentColor" stroke-width="2">
        <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
      </svg>
      <span>Everything from basic</span>
    </li>
    <li class="flex items-center space-x-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" fill="none" viewBox="0 0 20 20" stroke="currentColor" stroke-width="2">
        <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
      </svg>
      <span>24/7 Support</span>
    </li>
    <li class="flex items-center space-x-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" fill="none" viewBox="0 0 20 20" stroke="currentColor" stroke-width="2">
        <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
      </svg>
      <span>10 users</span>
    </li>
  </ul>
</div>

    </div>
  )
}

export default PriceCard