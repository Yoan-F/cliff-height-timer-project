<template>
    <div>
        <v-navigation-drawer v-model="drawer" clipped fixed app>
            <myContentDrawer />
        </v-navigation-drawer>
        <v-app-bar dark color="deep-purple" clipped-left app>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title @click="goHome" class="white--text">{{$t("title")}}</v-toolbar-title>
            <div class="col-md-8" v-if="loggedIn">
                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn @click.prevent="signOut" small color="purple">
                            <v-icon dark v-bind="attrs" v-on="on">mdi-account-arrow-right</v-icon>
                        </v-btn>
                    </template>
                    <span>{{$t("signout")}}</span>
                </v-tooltip>
            </div>
            <div v-else class="col-md-8" >
                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn small @click="goLogin" color="purple">
                            <v-icon dark v-bind="attrs" v-on="on">mdi-account</v-icon>
                        </v-btn>
                    </template>
                    <span>{{$t("login")}}</span>
                </v-tooltip>
                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn small @click="goRegister" color="purple">
                            <v-icon dark v-bind="attrs" v-on="on">mdi-account-plus</v-icon>
                        </v-btn>
                    </template>
                    <span>{{$t("register")}}</span>
                </v-tooltip >
            </div>
        </v-app-bar>
    </div>
</template>

<script>
    import * as firebase from "firebase/app";
    import "firebase/auth";
    import myContentDrawer from "@/components/Drawer";

    export default {
        name: 'myToolbar',
        components: {myContentDrawer},
        data: function () {
            return {
                drawer: false,
                loggedIn: false
            }
        },
        mounted() {
            this.setupFirebase();
        },
        methods: {
            goLogin() {
                this.$router.replace('/login')
                console.log(this.login)
            },
            goRegister() {
                this.$router.replace('/register')
            },
            goHome() {
                this.$router.replace('/')
            },
            signOut() {
                firebase
                    .auth()
                    .signOut()
                    .then(() => {
                        this.$router.replace('/');
                    });
            },
            setupFirebase() {
                firebase.auth().onAuthStateChanged(user => {
                    if (user) {
                        // User is signed in.
                        console.log("signed in");
                        this.loggedIn = true;
                    } else {
                        // No user is signed in.
                        this.loggedIn = false;
                        console.log("signed out", this.loggedIn);
                    }
                });
            },
        }
    }
</script>
