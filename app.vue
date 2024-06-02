<template>
  <div class=" h-[100vh] w-full">
    <ClientOnly>
        <Map />
    </ClientOnly>
    <footer class="  fixed bottom-0 hover:text-red-700 bg-gray-50 py-2 z-40 w-full flex justify-center items-center text-black text-base">
       <NuxtLink to="https://arefco.pro/" class="bold" target="_blank">
        گروه نرم افزاری عارف - arefco.pro 
       </NuxtLink>
    </footer>
  </div>
</template> 
