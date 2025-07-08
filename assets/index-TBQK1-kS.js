(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&e(r)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const d="/CUOpenDayTest/vite.svg",l="/CUOpenDayTest/tailwindcss-mark.svg",c="/CUOpenDayTest/typescript.svg",a="/CUOpenDayTest/cu-logo.svg";async function u(){return await(await fetch("/CUOpenDayTest/api/OpenDay.json")).json()}function f(s){const n=document.querySelector("#app");if(!s.topics){n.innerHTML='<p class="text-red-600">No Open Day data found.</p>';return}n.innerHTML=`
    <div class="demo-banner w-full bg-yellow-300 text-black flex flex-col sm:flex-row items-center justify-between px-4 py-2 mb-6 gap-2 border-b-2 border-yellow-500">
      <div class="font-bold text-lg flex-1 text-center sm:text-left">This is a demo app</div>
      <div class="flex flex-row items-center gap-3 justify-center">
        <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">
          <img src="${d}" alt="Vite Logo" class="h-8 w-auto" />
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
          <img src="${l}" alt="Tailwind CSS Logo" class="h-8 w-auto" />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
          <img src="${c}" alt="TypeScript Logo" class="h-8 w-auto" />
        </a>
      </div>
    </div>
    
    <!-- Improved Navigation Bar - Full Width -->
    <nav class="sticky top-0 z-50 bg-cardiff-red text-white shadow-md w-full">
      <div class="w-full px-4 py-3">
        <div class="flex justify-between items-center">
          <div class="flex items-center space-x-4">
            <a href="#" id="homeBtn" class="flex items-center space-x-2 text-black hover:text-white transition duration-200 font-bold text-xl">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Home</span>
            </a>
          </div>
          <div class="hidden md:flex space-x-8">
            <a href="#schedule" id="scheduleBtn" class="text-black hover:text-white transition duration-200 font-bold text-xl">Schedule</a>
            <a href="#" id="mapBtn" class="text-black hover:text-white transition duration-200 font-bold text-xl">Campus Map</a>
            <a href="#" id="contactBtn" class="text-black hover:text-white transition duration-200 font-bold text-xl">Contact</a>
          </div>
          <div class="md:hidden">
            <button id="mobileMenuBtn" class="text-white focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <!-- Mobile menu, hidden by default -->
      <div id="mobileMenu" class="md:hidden hidden bg-cardiff-dark w-full">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a href="#schedule" id="mobileScheduleBtn" class="block px-3 py-2 hover:bg-cardiff-red rounded transition duration-200 font-bold">Schedule</a>
          <a href="#" id="mobileMapBtn" class="block px-3 py-2 hover:bg-cardiff-red rounded transition duration-200 font-bold">Campus Map</a>
          <a href="#" id="mobileContactBtn" class="block px-3 py-2 hover:bg-cardiff-red rounded transition duration-200 font-bold">Contact</a>
        </div>
      </div>
    </nav>
    
    <div class="min-h-screen bg-cardiff-white font-sans px-2 py-6">
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
        <a href="https://www.cardiff.ac.uk/" target="_blank" rel="noopener noreferrer">
          <img src="${a}" alt="Cardiff University Logo" class="h-16 w-auto" />
        </a>
      </div>
      <h1 class="text-3xl sm:text-5xl font-bold text-cardiff-red mb-8 text-center">Cardiff University Open Day</h1>
      <div id="schedule" class="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        ${s.topics.map(e=>e&&e.name?`
          <div class="bg-cardiff-grey rounded-lg shadow p-6 flex flex-col hover:bg-gray-800 hover:text-white transition-colors duration-300 group h-[500px] overflow-y-auto">
            <img src="${e.cover_image||a}" alt="${e.name}" class="h-40 w-72 mx-auto object-cover rounded mb-4" />
            <h2 class="text-xl font-bold text-cardiff-red mb-2 group-hover:text-white hover:text-white transition-colors duration-300">${e.name}</h2>
            <p class="text-cardiff-dark mb-2 group-hover:text-white hover:text-white transition-colors duration-300">${e.description||""}</p>
            ${e.programs&&e.programs.length?`
              <div class="mt-2">
                <h3 class="font-semibold text-cardiff-dark mb-1 group-hover:text-white hover:text-white transition-colors duration-300">Events:</h3>
                <ul class="list-disc list-inside text-sm group-hover:text-white hover:text-white transition-colors duration-300">
                  ${e.programs.map(t=>t&&t.title?`<li class="group-hover:text-white hover:text-white transition-colors duration-300"><span class="font-semibold">${t.title}</span>${t.start_time?` <span class='text-xs group-hover:text-white hover:text-white'>(${new Date(t.start_time).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}${t.end_time?" - "+new Date(t.end_time).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):""})</span>`:""}${t.room?`, <span class='text-xs group-hover:text-white hover:text-white'>${t.room}</span>`:""}</li>`:"").join("")}
                </ul>
              </div>
            `:""}
            <div class="mt-auto flex justify-center">
              <button class="mt-4 px-6 py-3 bg-cardiff-dark text-white font-bold text-lg rounded shadow hover:bg-cardiff-red transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cardiff-red focus:ring-offset-2 flex items-center gap-2">Find out more <span class="text-2xl">&rarr;</span></button>
            </div>
          </div>
        `:"").join("")}
      </div>
    </div>
  `,document.getElementById("mobileMenuBtn")?.addEventListener("click",()=>{const e=document.getElementById("mobileMenu");e&&e.classList.toggle("hidden")}),document.getElementById("homeBtn")?.addEventListener("click",e=>{e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})}),document.getElementById("scheduleBtn")?.addEventListener("click",e=>{e.preventDefault();const t=document.getElementById("schedule");t&&t.scrollIntoView({behavior:"smooth"})}),document.getElementById("mobileScheduleBtn")?.addEventListener("click",e=>{e.preventDefault();const t=document.getElementById("schedule");t&&t.scrollIntoView({behavior:"smooth"}),document.getElementById("mobileMenu")?.classList.add("hidden")}),document.getElementById("mapBtn")?.addEventListener("click",e=>{e.preventDefault(),alert("Campus Map section coming soon.")}),document.getElementById("mobileMapBtn")?.addEventListener("click",e=>{e.preventDefault(),alert("Campus Map section coming soon."),document.getElementById("mobileMenu")?.classList.add("hidden")}),document.getElementById("contactBtn")?.addEventListener("click",e=>{e.preventDefault(),alert("Contact section coming soon.")}),document.getElementById("mobileContactBtn")?.addEventListener("click",e=>{e.preventDefault(),alert("Contact section coming soon."),document.getElementById("mobileMenu")?.classList.add("hidden")}),document.querySelectorAll(".text-cardiff-red.mb-2").forEach(e=>{e.addEventListener("mouseenter",()=>{e.classList.remove("text-cardiff-red"),e.classList.add("text-white")}),e.addEventListener("mouseleave",()=>{e.classList.remove("text-white"),e.classList.add("text-cardiff-red")})})}u().then(f);
