<template>
    <div class=" flex justify-center items-center py-4">
       <svg class="w-5" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="25 25 50 50">
           
           <circle class="stroke-current text-greenmain-400 text-opacity-30" cx="50" cy="50" r="20" fill="none" stroke-width="8" stroke-linecap="round" stroke-dashoffset="0" stroke-dasharray="200, 300">
       
           </circle>
           <circle class="stroke-current text-main-700" cx="50" cy="50" r="20" fill="none" stroke-width="8" stroke-linecap="round" stroke-dashoffset="0" stroke-dasharray="100, 200">
           <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 50 50" to="360 50 50" dur="2.5s" repeatCount="indefinite"></animateTransform>
           <animate attributeName="stroke-dashoffset" values="0;-30;-124" dur="1.25s" repeatCount="indefinite"></animate>
           <animate attributeName="stroke-dasharray" values="0,200;110,200;110,200" dur="1.25s" repeatCount="indefinite"></animate>
           </circle>
       
       
       </svg>
    </div>
</template>