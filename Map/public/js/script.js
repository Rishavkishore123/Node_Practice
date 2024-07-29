const socket= io("http://localhost:4001/");

if(navigator.geolocation){
    navigator.geolocation.watchPosition((position)=>{
        const {latitude,longitude}= position.coords;
        socket.emit("send-location",{latitude,longitude})
    },
        (error)=>{
            console.log(error);
        },

        {
            enableHighAccuracy: true,
            timeout:4000,
            maximumAge: 0
        }

)
}

let marker={}

let map=L.map("map").setView([0,0],20)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution: "Rishav",
}).addTo(map)

socket.on('receive-location',(data)=>{
    const {id, latitude, longitude} =data;
    map.setView([latitude,longitude]);


    if(marker[id]){
    marker[id].setLatLng([latitude,longitude]);
  }else{
    marker[id]=L.marker([latitude,longitude]).addTo(map);
    }

})

socket.on("user-disconnect",(id)=>{
    if(marker[id]){
        map.removeLayer(marker[id]);
        delete marker[id];
    }
})

