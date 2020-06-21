<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="v-card">
                    <div class="card-header">
                        <h1>{{ $t("register") }}</h1>
                    </div>
                    <div class="card-body">
                        <div v-if="error" class="alert alert-danger">{{error}}</div>
                        <form @submit.prevent="submit" action="#">
                            <div class="form-group row">
                                <label for="name" class="col-md-4 col-form-label text-md-right">{{$t("Name")}}</label>

                                <div class="col-md-6">
                                    <input
                                            id="name"
                                            type="name"
                                            class="form-control"
                                            name="name"
                                            value
                                            required
                                            autofocus
                                            v-model="form.name"
                                            placeholder="Your Name"
                                    />
                                </div>
                            </div>

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
                                            placeholder="Your Email"
                                    />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">{{$t("Password")}}</label>

                                <div class="col-md-6">
                                    <input
                                            id="password"
                                            type="password"
                                            class="form-control"
                                            name="password"
                                            required
                                            v-model="form.password"
                                            placeholder="Your Password"
                                    />
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <v-btn type="submit" depressed small>{{ $t("register") }}</v-btn>
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
        name: "register",
        data() {
            return {
                form: {
                    name: "",
                    email: "",
                    password: ""
                },
                error: null
            };
        },
        methods: {
            submit() {
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(this.form.email, this.form.password)
                    .then(data => {
                        data.user
                            .updateProfile({
                                displayName: this.form.name
                            })
                            .then(() => {
                                this.$router.replace('/login')});
                    })
                    .catch(err => {
                        this.error = err.message;
                    });
            }
        }
    };
</script>
