<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="v-card">
                    <div class="card-header">
                        <h1>Login</h1>
                    </div>
                    <div class="card-body">
                        <div v-if="error" class="alert alert-danger">{{error}}</div>
                        <form action="#" @submit.prevent="submit">
                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>
                                <div class="col-md-6">
                                    <input
                                            id="email"
                                            type="email"
                                            class="form-control"
                                            name="email"
                                            value
                                            required
                                            autofocus
                                            v-model="form.email"
                                            placeholder="Your email"
                                    />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                                <div class="col-md-6">
                                    <input
                                            id="password"
                                            type="password"
                                            class="form-control"
                                            name="password"
                                            required
                                            v-model="form.password"
                                            placeholder="Your password"
                                    />
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <v-btn type="submit" depressed small>Login</v-btn>
                                    <v-btn @click="goRegister" depressed small>Register</v-btn>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import firebase from "firebase";

    export default {
        name: "login",
        data() {
            return {
                form: {
                    email: "",
                    password: ""
                },
                error: null
            };
        },
        methods: {
            goRegister(){
                this.$router.replace('/register')
            },
            submit: function () {
                firebase
                    .auth()
                    .signInWithEmailAndPassword(this.form.email, this.form.password)
                    .then(data=> {
                        //pb sur le data faire un data.(set loggin en true ici je pense)
                        console.log(data);
                        this.$router.replace('/');
                        console.log("ok router");
                    })
                    .catch(err => {
                        this.error = err.message;
                    });
            }
        }
    };
</script>
