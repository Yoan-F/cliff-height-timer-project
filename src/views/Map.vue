<template>
    <l-map id="map" :zoom="zoom" :center="center">
        <l-tile-layer :url="url"></l-tile-layer>
        <l-marker @click="() => removeMarker(marker['.key'])" v-for="(marker,i) in markerList" :key="i" :lat-lng="marker"></l-marker>

        <l-control> <button @click="getUserLocation">Localisez-moi</button> </l-control>
    </l-map>
</template>

<script>
    import { LMap, LTileLayer ,LMarker, LControl } from "vue2-leaflet";
    export default {
        name: "map",
        firebase() {
            return {
                markerList: this.$db.ref("/markerList/")
            };
        },
        data() {
            return {
                markerList: [],
                url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
                zoom: 13,
                center: [47.472092, -0.550589]
            }
        },
        components: {
            LMap,
            LTileLayer,
            LMarker,
            LControl
        },
        methods: {
            addMarker(position) {
                this.$firebaseRefs.markerList.push([
                    position.latlng.lat,
                    position.latlng.lng
                ]);
            },
            removeMarker(markerKey) {
                this.$firebaseRefs.markerList.child(markerKey).remove();
            },
            getUserLocation() {
                if ("geolocation" in navigator) {
                    navigator.geolocation.getCurrentPosition(
                        position => {
                            this.center = [position.coords.latitude, position.coords.longitude];
                        },
                        error => {
                            console.error(error);
                        }
                    );
                }
            }
        },
    }
</script>

<style scoped>
    #map {
        height: 100%;
        width: 100%;
    }
</style>
