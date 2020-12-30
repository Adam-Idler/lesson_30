(()=>{"use strict";new class{constructor(e){this.deadlineDate=e}countTimer(){const e=this;let t=document.querySelector("#timer-hours"),o=document.querySelector("#timer-minutes"),n=document.querySelector("#timer-seconds"),r=setInterval(a,1e3);function a(){let a=function(){let t=(new Date(e.deadlineDate).getTime()-(new Date).getTime())/1e3,o=Math.floor(t%60),n=Math.floor(t/60%60);return{timeRemaining:t,hours:Math.floor(t/3600)%24,minutes:n,seconds:o}}();a.timeRemaining>0?(t.textContent=String(a.hours).replace(/^\w$/,"0"+a.hours),o.textContent=String(a.minutes).replace(/^\w$/,"0"+a.minutes),n.textContent=String(a.seconds).replace(/^\w$/,"0"+a.seconds)):(t.textContent="00",o.textContent="00",n.textContent="00",clearInterval(r))}a()}}("31 dec 2020").countTimer(),(new class{toggleMenu(){document.querySelector(".menu");const e=document.querySelector("menu");document.addEventListener("click",(t=>{let o=t.target;o.closest("menu")||e.classList.remove("active-menu"),("A"===o.tagName&&o.closest(".active-menu")||o.closest(".menu"))&&e.classList.toggle("active-menu")}))}}).toggleMenu(),(new class{togglePopUp(){const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn");let o,n=-100,r=0;function a(){r=10,n<=-5?(n+=r,e.style.transform=`translate(${n}%)`,o=requestAnimationFrame(a)):(r=0,cancelAnimationFrame(o))}function s(){r=-10,n>=-95?(n+=r,e.style.transform=`translate(${n}%)`,o=requestAnimationFrame(s)):(r=0,cancelAnimationFrame(o))}e.style.display="block",e.style.transform=`translate(${n}%)`,t.forEach((t=>{t.addEventListener("click",(()=>{window.screen.width>768?o=requestAnimationFrame(a):e.style.transform="translate(0%)"}))})),e.addEventListener("click",(t=>{let n=t.target,r=!!n.classList.contains("popup-close");n=n.closest(".popup-content"),n&&!r||(window.screen.width>768?o=requestAnimationFrame(s):e.style.transform="translate(-100%)")}))}}).togglePopUp(),(new class{scrollTo(){const e=document.querySelectorAll('a[href^="#"]');for(let t=0;t<7;t++)e[t].addEventListener("click",(function(o){o.preventDefault();const n=e[t].getAttribute("href");o.target.classList.contains("close-btn")||document.querySelector(n).scrollIntoView({behavior:"smooth",block:"start"})}))}}).scrollTo(),(new class{activateTabs(){const e=document.querySelector(".service-header"),t=e.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{let n=e.target;n=n.closest(".service-header-tab"),n&&t.forEach(((e,r)=>{e===n&&(e=>{for(let n=0;n<o.length;n++)e===n?(t[n].classList.add("active"),o[n].classList.remove("d-none")):(t[n].classList.remove("active"),o[n].classList.add("d-none"))})(r)}))}))}}).activateTabs(),(new class{sliderActivate(){const e=document.querySelectorAll(".portfolio-item"),t=document.querySelector(".portfolio-content"),o=t.querySelector(".portfolio-dots");let n=e.length;for(let e=0;e<n;e++){const e=document.createElement("li");o.insertBefore(e,o.lastChild),e.classList.add("dot")}const r=o.querySelectorAll(".dot");let a,s=0;const c=(e,t,o)=>e[t].classList.remove(o),l=(e,t,o)=>e[t].classList.add(o),i=()=>{c(e,s,"portfolio-item-active"),c(r,s,"dot-active"),s++,s>=e.length&&(s=0),l(r,s,"dot-active"),l(e,s,"portfolio-item-active")},u=(e=3e3)=>{a=setInterval(i,e)};t.addEventListener("click",(t=>{t.preventDefault();let o=t.target;o.matches(".portfolio-btn, .dot")&&(c(e,s,"portfolio-item-active"),c(r,s,"dot-active"),o.matches("#arrow-right")?s++:o.matches("#arrow-left")?s--:o.matches(".dot")&&r.forEach(((e,t)=>{e===o&&(s=t)})),s>=e.length&&(s=0),s<0&&(s=e.length-1),l(r,s,"dot-active"),l(e,s,"portfolio-item-active"))})),t.addEventListener("mouseover",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(a)})),t.addEventListener("mouseout",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&u()})),u(1500)}}).sliderActivate(),(new class{photoChange(){const e=document.querySelector("#command>.container>.row");let t;e.addEventListener("mouseover",(e=>{let o=e.target;t=o.src,o.src=o.dataset.img,o.dataset.img=t})),e.addEventListener("mouseout",(e=>{let o=e.target;o.dataset.img=o.src,o.src=t,t=o.src}))}}).photoChange(),(new class{constructor(){this.calcBlock=document.querySelector(".calc-block"),this.textForm=document.querySelectorAll("form")}init(){this.validateCalc(),this.validateInputText(),maskPhone(".form-phone","____ ___-__-__"),document.querySelectorAll(".form-email").forEach((e=>e.setAttribute("required",!0))),document.querySelector(".mess").setAttribute("required",!0),document.querySelectorAll(".form-name").forEach((e=>{e.onblur=e=>{e.target.value.length<2&&(e.target.value="")}})),document.getElementById("form2-name").onblur=e=>e.target.value.length<2?e.target.value="":""}validateCalc(){this.calcBlock.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\d\.]/,"")}))}validateInputText(){this.textForm.forEach((e=>{e.addEventListener("input",(e=>{const t=e.target;(t.classList.contains("form-name")||"form2-name"===t.id)&&(t.value=t.value.replace(/[^а-яё\s]{2,15}/i,"")),t.classList.contains("form-email")&&(t.value=t.value.replace(/[а-яё\s,\#\$\%\/|\\\[\]\{\}&\`\~?!*\(\)\+\=\^\:\;\'\"]/i,"")),t.classList.contains("mess")&&(t.value=t.value.replace(/[a-z]/i,""))}))}))}}).init(),new class{constructor(e){this.price=e}calc(){const e=document.querySelector(".calc-block"),t=document.querySelector(".calc-type"),o=document.querySelector(".calc-square"),n=document.querySelector(".calc-day"),r=document.querySelector(".calc-count"),a=document.getElementById("total"),s=()=>{let e=0,s=1,c=1;const l=t.options[t.selectedIndex].value,i=+o.value;r.value>1&&(s+=(r.value-1)/10),n.value&&n.value<5?c*=2:n.value&&n.value<10&&(c*=1.5),l&&i&&(e=Math.ceil(this.price*l*i*s*c));let u,m=+a.textContent;u=setInterval((()=>{0===e?(a.textContent=0,clearInterval(u)):m<e?(m+=100,a.textContent=m):m>e&&(m-=100,a.textContent=m),e-a.textContent<150&&e-a.textContent>0&&(a.textContent=e,clearInterval(u))}),5)};e.addEventListener("change",(e=>{const t=e.target;(t.matches("select")||t.matches("input"))&&s()}))}}(100).calc(),(new class{constructor(){this.errorMessage="Что-то пошло не так...",this.loadMessage="Загрузка...",this.successMessage="Спасибо! Мы скоро с вами свяжимся!",this.forms=document.querySelectorAll("form")}postData(e,t){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}sendAjax(){const e=document.createElement("div");e.style.cssText="\n            font-size: 2rem;\n            color: #fff;\n    ",this.forms.forEach((t=>{t.addEventListener("submit",(o=>{o.preventDefault(),t.appendChild(e),e.textContent=this.loadMessage;const n=new FormData(t);let r={};n.forEach(((e,t)=>{r[t]=e})),this.postData(t,r).then((t=>{if(201!==t.status)throw new Error("status network not 200");e.textContent=this.successMessage,setTimeout((()=>e.remove()),3e3)})).catch((t=>{e.textContent=this.errorMessage,console.error(t),setTimeout((()=>e.remove()),3e3)})),t.reset()}))}))}}).sendAjax()})();