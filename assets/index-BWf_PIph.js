(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const e of s)if(e.type==="childList")for(const t of e.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&o(t)}).observe(document,{childList:!0,subtree:!0});function i(s){const e={};return s.integrity&&(e.integrity=s.integrity),s.referrerPolicy&&(e.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?e.credentials="include":s.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(s){if(s.ep)return;s.ep=!0;const e=i(s);fetch(s.href,e)}})();const l="/CUOpenDayTest/vite.svg",d="/CUOpenDayTest/tailwindcss-mark.svg",c="/CUOpenDayTest/typescript.svg",r="/CUOpenDayTest/cu-logo.svg";async function f(){return await(await fetch("/CUOpenDayTest/api/OpenDay.json")).json()}function u(n){const a=document.querySelector("#app");if(!n.topics){a.innerHTML='<p class="text-red-600">No Open Day data found.</p>';return}a.innerHTML=`
    <div class="demo-banner w-full bg-yellow-300 text-black flex flex-col sm:flex-row items-center justify-between px-4 py-2 mb-6 gap-2 border-b-2 border-yellow-500">
      <div class="font-bold text-lg flex-1 text-center sm:text-left">This is a demo app</div>
      <div class="flex flex-row items-center gap-3 justify-center">
        <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">
          <img src="${l}" alt="Vite Logo" class="h-8 w-auto" />
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
          <img src="${d}" alt="Tailwind CSS Logo" class="h-8 w-auto" />
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
            <!-- Search Icon Button -->
            <button id="searchIconBtn" class="ml-2 bg-cardiff-red rounded px-2 py-1 flex items-center justify-center hover:bg-red-700 transition duration-200 focus:outline-none" aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 font-bold" fill="none" viewBox="0 0 24 24" stroke="black" stroke-width="3">
                <circle cx="11" cy="11" r="7" stroke="black" stroke-width="3" fill="none"/>
                <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="black" stroke-width="3" stroke-linecap="round"/>
              </svg>
            </button>
            <a href="#schedule" id="scheduleBtn" class="text-black hover:text-white transition duration-200 font-bold text-xl">Schedule</a>
            <!-- Search Bar Dropdown -->
            <div id="searchBarDropdown" class="absolute right-32 mt-2 w-72 bg-white border border-gray-300 rounded shadow-lg p-4 z-50 hidden">
              <input id="searchInput" type="text" placeholder="Search..." class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cardiff-red" />
              <button id="searchSubmitBtn" class="mt-2 w-full bg-cardiff-red text-white font-bold py-2 rounded hover:bg-red-700 transition-colors">Search</button>
            </div>
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
    <!-- Cymraeg and Apply Now Buttons below nav, top right of watermark -->
    <div class="w-full flex justify-end px-4 mt-2" style="max-width: 100vw;">
      <button id="cymraegBtn" class="border border-gray-400 rounded px-4 py-1 text-black font-semibold bg-white hover:bg-gray-100 hover:border-cardiff-red hover:text-cardiff-red transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cardiff-red">Cymraeg</button>
      <a href="https://www.cardiff.ac.uk/study/undergraduate/applying" target="_blank" rel="noopener noreferrer">
        <button id="applyNowBtn" class="ml-4 bg-cardiff-red text-white font-bold rounded px-6 py-2 shadow hover:bg-red-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cardiff-red">Apply Now</button>
      </a>
    </div>
    <div class="min-h-screen flex flex-col justify-between bg-cardiff-white font-sans px-2 py-6" style="min-height: 100dvh;">
      <div class="relative w-full flex flex-col items-center justify-center mb-6" style="min-height: 350px;">
        <!-- Watermark background image -->
        <div class="absolute left-0 right-0 mx-auto w-full max-w-7xl h-[350px] flex items-center justify-center pointer-events-none select-none" style="z-index: 0;">
          <img src="https://www.cardiff.ac.uk/__data/assets/image/0008/370871/Main-Building.jpg" alt="Cardiff University Building" class="w-full h-full object-cover opacity-35" style="filter: grayscale(1);" />
        </div>
        <!-- Logo and heading (z-10) -->
        <div class="relative z-10 flex flex-col items-center w-full">
          <a href="https://www.cardiff.ac.uk/" target="_blank" rel="noopener noreferrer">
            <img src="${r}" alt="Cardiff University Logo" class="h-16 w-auto mx-auto" />
          </a>
          <h1 class="text-3xl sm:text-5xl font-bold text-cardiff-red mt-6 text-center w-full">Cardiff University Open Day</h1>
        </div>
      </div>
        <div id="schedule" class="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-none px-0">
          ${n.topics.map(e=>e&&e.name?`
            <div class="bg-cardiff-grey rounded-lg shadow p-6 flex flex-col hover:bg-gray-800 hover:text-white transition-colors duration-300 group h-[500px] overflow-y-auto w-full">
              <img src="${e.cover_image||r}" alt="${e.name}" class="h-40 w-72 mx-auto object-cover rounded mb-4" />
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
    </div>
    <!-- Footer -->
    <footer class="footer-bg text-white mt-12">
      <div class="max-w-7xl mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 class="font-bold mb-2">The University</h3>
            <ul class="space-y-1 text-sm">
              <li><a href="#" class="footer-link">Academic Schools</a></li>
              <li><a href="#" class="footer-link">Visitor information</a></li>
              <li><a href="#" class="footer-link">Contact us</a></li>
              <li><a href="#" class="footer-link">Emergency contacts</a></li>
              <li><a href="#" class="footer-link">Public information</a></li>
            </ul>
          </div>
          <div>
            <h3 class="font-bold mb-2">Our facilities</h3>
            <ul class="space-y-1 text-sm">
              <li><a href="#" class="footer-link">Libraries</a></li>
              <li><a href="#" class="footer-link">Conferences</a></li>
              <li><a href="#" class="footer-link">Research equipment</a></li>
              <li><a href="#" class="footer-link">Sport</a></li>
            </ul>
          </div>
          <div>
            <h3 class="font-bold mb-2">Connect with us</h3>
            <ul class="space-y-1 text-sm">
              <li><a href="#" class="footer-link">New students</a></li>
              <li><a href="#" class="footer-link">Alumni</a></li>
              <li><a href="#" class="footer-link">Blogs</a></li>
            </ul>
          </div>
          <div>
            <h3 class="font-bold mb-2">Quick links</h3>
            <ul class="space-y-1 text-sm">
              <li><a href="#" class="footer-link">Job opportunities</a></li>
              <li><a href="#" class="footer-link">Intranet</a></li>
              <li><a href="#" class="footer-link">Media centre</a></li>
              <li><a href="#" class="footer-link">People</a></li>
              <li><a href="#" class="footer-link">Research Portal</a></li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col md:flex-row md:items-center md:justify-between border-t border-gray-700 pt-6">
          <div class="flex items-center space-x-4 mb-4 md:mb-0">
            <span class="text-xs">Copyright Cardiff University. Registered charity no. 1136855</span>
            <span class="hidden md:inline-block text-xs">|</span>
            <a href="#" class="text-xs footer-link">Accessibility statement</a>
            <span class="hidden md:inline-block text-xs">|</span>
            <a href="#" class="text-xs footer-link">Modern Slavery statement</a>
            <span class="hidden md:inline-block text-xs">|</span>
            <a href="#" class="text-xs footer-link">Privacy</a>
            <span class="hidden md:inline-block text-xs">|</span>
            <a href="#" class="text-xs footer-link">Terms of use</a>
            <span class="hidden md:inline-block text-xs">|</span>
            <a href="#" class="text-xs footer-link">Cookies</a>
          </div>
          <div class="flex space-x-4 justify-center md:justify-end">
            <a href="#" aria-label="Facebook" class="footer-link"><svg fill="currentColor" viewBox="0 0 24 24" class="h-5 w-5"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg></a>
            <a href="#" aria-label="Twitter" class="footer-link"><svg fill="currentColor" viewBox="0 0 24 24" class="h-5 w-5"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.496 14.009-13.986 0-.21 0-.423-.016-.634A9.936 9.936 0 0 0 24 4.557z"/></svg></a>
            <a href="#" aria-label="Instagram" class="footer-link"><svg fill="currentColor" viewBox="0 0 24 24" class="h-5 w-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.13 4.602.402 3.635 1.37 2.668 2.337 2.396 3.51 2.338 4.788 2.279 6.068 2.267 6.477 2.267 12c0 5.523.012 5.932.071 7.212.058 1.278.33 2.451 1.297 3.418.967.967 2.14 1.239 3.418 1.297 1.28.059 1.689.071 7.212.071s5.932-.012 7.212-.071c1.278-.058 2.451-.33 3.418-1.297.967-.967 1.239-2.14 1.297-3.418.059-1.28.071-1.689.071-7.212s-.012-5.932-.071-7.212c-.058-1.278-.33-2.451-1.297-3.418C19.398.402 18.225.13 16.948.072 15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg></a>
            <a href="#" aria-label="YouTube" class="footer-link"><svg fill="currentColor" viewBox="0 0 24 24" class="h-5 w-5"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.771 3.5 12 3.5 12 3.5s-7.771 0-9.386.574a2.994 2.994 0 0 0-2.112 2.112C0 7.8 0 12 0 12s0 4.2.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.229 20.5 12 20.5 12 20.5s7.771 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 16.2 24 12 24 12s0-4.2-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
          </div>
        </div>
      </div>
    </footer>
  `,document.getElementById("mobileMenuBtn")?.addEventListener("click",()=>{const e=document.getElementById("mobileMenu");e&&e.classList.toggle("hidden")}),document.getElementById("homeBtn")?.addEventListener("click",e=>{e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})}),document.getElementById("scheduleBtn")?.addEventListener("click",e=>{e.preventDefault();const t=document.getElementById("schedule");t&&t.scrollIntoView({behavior:"smooth"})}),document.getElementById("mobileScheduleBtn")?.addEventListener("click",e=>{e.preventDefault();const t=document.getElementById("schedule");t&&t.scrollIntoView({behavior:"smooth"}),document.getElementById("mobileMenu")?.classList.add("hidden")}),document.getElementById("mapBtn")?.addEventListener("click",e=>{e.preventDefault(),alert("Campus Map section coming soon.")}),document.getElementById("mobileMapBtn")?.addEventListener("click",e=>{e.preventDefault(),alert("Campus Map section coming soon."),document.getElementById("mobileMenu")?.classList.add("hidden")}),document.getElementById("contactBtn")?.addEventListener("click",e=>{e.preventDefault(),alert("Contact section coming soon.")}),document.getElementById("mobileContactBtn")?.addEventListener("click",e=>{e.preventDefault(),alert("Contact section coming soon."),document.getElementById("mobileMenu")?.classList.add("hidden")});const i=document.getElementById("searchIconBtn"),o=document.getElementById("searchBarDropdown");if(i&&o){let e;i.addEventListener("click",t=>{t.stopPropagation(),o.classList.toggle("hidden"),o.classList.contains("hidden")||document.getElementById("searchInput")?.focus()}),i.addEventListener("mouseenter",()=>{clearTimeout(e),o.classList.remove("hidden"),document.getElementById("searchInput")?.focus()}),i.addEventListener("mouseleave",()=>{e=window.setTimeout(()=>{o.classList.add("hidden")},300)}),o.addEventListener("mouseenter",()=>{clearTimeout(e)}),o.addEventListener("mouseleave",()=>{e=window.setTimeout(()=>{o.classList.add("hidden")},300)}),document.addEventListener("click",t=>{o.classList.contains("hidden")||!o.contains(t.target)&&t.target!==i&&o.classList.add("hidden")})}document.querySelectorAll(".text-cardiff-red.mb-2").forEach(e=>{e.addEventListener("mouseenter",()=>{e.classList.remove("text-cardiff-red"),e.classList.add("text-white")}),e.addEventListener("mouseleave",()=>{e.classList.remove("text-white"),e.classList.add("text-cardiff-red")})})}f().then(u);
