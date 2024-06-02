<script setup> 
    // import 
    import '@neshan-maps-platform/mapbox-gl/dist/NeshanMapboxGl.css';
    import nmp_mapboxgl from '@neshan-maps-platform/mapbox-gl';
    //State
    let geo = reactive([51.69455835843746, 32.64067379725249]); 
    const mapKey = "Your_mapKey" 
    const serviceKey = "Your_serviceKey" 
    const openSearchBox = ref(false);   
    const loading = ref(false);   
    const result = ref([]);   
    let map = '';
    let marker = '';


    onMounted(() => {
          map = new nmp_mapboxgl.Map({
            mapType: nmp_mapboxgl.Map.mapTypes.neshanVector,
            container: "map",
            zoom: 15,
            pitch: 0,
            center: geo,
            minZoom: 2,
            maxZoom: 21,
            trackResize: true,
            mapKey: mapKey,
            poi: false,
            traffic: false,
            mapTypeControllerOptions: {
                show: false, 
            }
        });
        map.on('load', () => {
             marker = new nmp_mapboxgl.Marker({color:'red'})
            .setLngLat(geo)
            .addTo(map);
            map.addControl(
                new nmp_mapboxgl.GeolocateControl({
                    positionOptions: {
                        enableHighAccuracy: true
                    }, 
                    trackUserLocation: true, 
                    showUserHeading: true
                })
            );
            map.on('click', (e) => { 
                geo.value=e.lngLat  
                marker.setLngLat(e.lngLat);
                openSearchBox.value=false;
            }); 
        });
    }) 

    const handelGetGeo =  async (e)=>{  
        openSearchBox.value=true;
        loading.value=true;
        // Fetch List
        const { data, pending, error, refresh } = await useFetch('https://api.neshan.org/v1/search?term='+e.target.value+'&lat='+geo[0]+'&lng='+geo[1] , {
            onRequest({ request, options }) { 
                options.headers =   {
                    'Api-Key' : serviceKey,
                    'Accept'  : 'application/json'
                } 
            }, 
            onResponseError({ request, response, options }) { 
                 console.log(response);
            }, 
            server: false
        })  
        result.value=JSON.parse(JSON.stringify(data))._value 
        loading.value=false;
    }    

    const handelSetLocation = (location) => { 
        geo.value=[location.x,location.y] 
        map.flyTo({
            center: [location.x,location.y],
            essential: true  
        });
        marker.setLngLat([location.x,location.y]);
        openSearchBox.value=false;
    }
</script>
<template>
    <div class="h-full relative"> 
        <div id="map" class="h-full" ></div>
        <div class=" w-full absolute top-0">
            <input   v-on:keyup="handelGetGeo" dir="rtl" placeholder="جستجو مناطق ..." class="h-8 w-full  text-center   placeholder-gray-400  outline-none  border border-gray-400 focus:border-main-blue-400  text-sm " type="text">  
            <div :class="openSearchBox ? 'block' : 'hidden'" class="w-full   h-[16vh] bg-white">
                <div  v-if=" loading == true"    >
                    <Snipper />
                </div> 
                <ul v-else class=" w-full h-full overflow-y-auto"> 
                    <template v-if="result && 0 < result.count"> 
                        <li :key="i" v-for="(item,i) in result.items" @click="handelSetLocation(item.location)" class=" w-full hover:bg-gray-100 cursor-pointer text-center py-1 border-b border-gray-400">
                           {{ item.title }}({{ item.region }}-{{ item.address }})
                        </li>
                    </template>
                    <template v-else>
                        <li class=" w-full hover:bg-gray-100 cursor-pointer text-center py-1 border-b border-gray-400">
                           موردی یافت نشد
                        </li>
                    </template> 
                </ul>
            </div>
        </div>
    </div>
</template>