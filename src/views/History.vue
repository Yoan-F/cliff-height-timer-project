<template>
    <v-container fluid>
        <v-list v-if="history.length > 0">
            <h1>{{ $t("title-history") }}</h1>
            <v-list-tile v-for="(item,i) in history" v-bind:key="i">
                <v-list-tile-content>
                    <br>
                    <p>{{item.time}}s, {{item.m}}m, {{item.ft}}ft</p>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
        <div v-else>
            {{ $t("history.noHistory") }}
        </div>
    </v-container>
</template>

<script>
    export default {
        name: 'history',
        computed: {
            history () {
                let history = JSON.parse(localStorage.getItem('history'))
                return !Array.isArray(history) ? [] : history
            }
        }
    }
</script>

<style>

</style>
