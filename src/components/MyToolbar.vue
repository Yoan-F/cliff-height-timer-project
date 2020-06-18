<template v-if="user.loggedIn">
    <div>
        <v-navigation-drawer v-model="drawer" clipped fixed app>
            <myContentDrawer />
        </v-navigation-drawer>
        <v-app-bar dark color="deep-purple" clipped-left app>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title @click="goHome" class="white--text">{{$t("title")}}</v-toolbar-title>
            <div class="my-2" >
                <v-btn @click.prevent="signOut" small color="purple">SignOut</v-btn>
            </div>

        </v-app-bar>
    </div>
</template>
<template v-else>
    <div>
        <v-navigation-drawer v-model="drawer" clipped fixed app>
            <myContentDrawer />
        </v-navigation-drawer>
        <v-app-bar dark color="deep-purple" clipped-left app>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title @click="goHome" class="white--text">{{$t("title")}}</v-toolbar-title>
            <div class="my-2" >
                <v-btn small @click="goLogin" color="purple">Login</v-btn>
                <v-btn small @click="goRegister" color="purple">Register</v-btn>
            </div>

        </v-app-bar>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    import firebase from "firebase";
    import myContentDrawer from "@/components/Drawer";
    export default {
        name: 'myToolbar',
        components: {myContentDrawer},
        data: function () {
            return {
                drawer: false
            }
        },
        methods: {
            goLogin(){
                this.$router.replace('/login')
            },
            goRegister(){
                this.$router.replace('/register')
            },
            goHome () {
                this.$router.replace('/')
            },
            signOut() {
                firebase
                    .auth()
                    .signOut()
                    .then(() => {
                        this.$router.replace('/');
                    });
            }
        },
        computed: {
            ...mapGetters({
                // map `this.user` to `this.$store.getters.user`
                user: "user"
            })
        },
    }
</script>
