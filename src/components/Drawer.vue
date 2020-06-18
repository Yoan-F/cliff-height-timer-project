<template>
    <div>
        <v-toolbar class="deep-purple" />
        <v-list dense>
            <template v-for="(item, i) in items">
                <v-divider dark v-if="item.divider" :key="i"></v-divider>
                <v-list-item ripple :to="item.action" :key="i" v-else>
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="body-2">{{ item.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </template>
            <!--<template>
                <div class="nav-item" v-if="user.loggedIn">
                    <div class="nav-item">{{user.data.displayName}}</div>
                    <li class="nav-item">
                        <a class="nav-link" @click.prevent="signOut">Sign out</a>
                    </li>
                </div>
                <div class="nav-item" v-else>
                    <li class="nav-item">
                        <router-link to="login" class="nav-link">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="register" class="nav-link">Register</router-link>
                    </li>
                </div>
            </template>-->
        </v-list> </div>
</template>

<script>
    export default {
        name: 'drawer',
        data() {
            return {
                items: [
                    {icon: 'mdi-home', text: this.$t('drawer.home'), action: '/'},
                    {icon: 'mdi-history', text: this.$t('drawer.history'), action: '/history'},
                    {icon: 'mdi-help', text: this.$t('drawer.about'), action: '/about'},
                ]
            }
        },
    }
</script>
