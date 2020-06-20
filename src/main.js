import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import i18n from './i18n';
import * as firebase from "firebase";

Vue.config.productionTip = false

/*new Vue({
  vuetify,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')*/

const configOptions = {
  apiKey: "AIzaSyAm0iSsXhtciuqpV-_OoQoNpp2VV7BLZjc",
  authDomain: "vue-firebase-auth-3fdc4.firebaseapp.com",
  databaseURL: "https://vue-firebase-auth-3fdc4.firebaseio.com",
  projectId: "vue-firebase-auth-3fdc4",
  storageBucket: "vue-firebase-auth-3fdc4.appspot.com",
  messagingSenderId: "1001064612360",
  appId: "1:1001064612360:web:aad4dc53dffce111ce07bd",
  measurementId: "G-8XT5NY4K8Z"
};

firebase.initializeApp(configOptions);

let app;

firebase.auth().onAuthStateChanged(user => {
  console.log("user", user);
  if (!app) {
    new Vue({
      vuetify,
      router,
      i18n,
      render: h => h(App)
    }).$mount('#app');
  }
});
