<template>

    <div id="login">
      <transition name="fade">
            <div v-if="performingRequest" class="loading">
                <p>Loading...</p>
            </div>
        </transition>
      <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>

                  <v-text-field prepend-icon="person" v-model.trim="loginForm.email" type="text" placeholder="you@email.com" id="email1" ></v-text-field>

                  <v-text-field  prepend-icon="lock" v-model.trim="loginForm.password" type="password" placeholder="******" id="password1"></v-text-field>
                  <div class="extras">
                        <a @click="togglePasswordReset">Forgot Password</a>
                        <a @click="toggleForm">Create an Account</a>
                    </div>

                         <form v-if="!showLoginForm && !showForgotPassword" @submit.prevent>

                           <!-- Start sign up -->
                    <h1>Get Started</h1>

                    <label for="name">Name</label>
                    <v-text-field v-model.trim="signupForm.name" type="text" placeholder="Name" id="name"></v-text-field>

                    <label for="title">Title</label>
                    <v-text-field v-model.trim="signupForm.title" type="text" placeholder="Company" id="title"></v-text-field>

                    <label for="email2">Email</label>
                    <v-text-field v-model.trim="signupForm.email" type="text" placeholder="you@email.com" id="email2"></v-text-field>

                    <label for="password2">Password</label>
                    <v-text-field v-model.trim="signupForm.password" type="password" placeholder="min 6 characters" id="password2"></v-text-field>

                    <button @click="signup" class="button">Sign Up</button>

                    <div class="extras">
                        <a @click="toggleForm">Back to Log In</a>
                    </div>
                </form>
                </v-form>

                <form v-if="showForgotPassword" @submit.prevent class="password-reset">
                    <div v-if="!passwordResetSuccess">
                        <h1>Reset Password</h1>
                        <p>We will send you an email to reset your password</p>

                        <label for="email3">Email</label>
                        <v-text-field v-model.trim="passwordForm.email" type="text" placeholder="you@email.com" id="email3"></v-text-field>

                        <v-btn color="green" @click="resetPassword" class="button">Submit</v-btn>

                        <div class="extras">
                            <v-btn @click="togglePasswordReset">Back to Log In</v-btn>
                        </div>
                    </div>
                    <div v-else>
                        <h1>Email Sent</h1>
                        <p>check your email for a link to reset your password</p>
                        <button @click="togglePasswordReset" class="button">Back to login</button>
                    </div>
                </form>


              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login">Login</v-btn>
              </v-card-actions>

                 <transition name="fade">
                    <div v-if="errorMsg !== ''" class="error-msg">
                        <p>{{ errorMsg }}</p>
                    </div>
                </transition>


            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
            </div>
</template>

<style>
.stuff {
  background-color: red;
}
</style>

<script>
const fb = require('../firebaseConfig.js')
export default {
  data () {
    return {
      loginForm: {
        email: '',
        password: ''
      },
      signupForm: {
        name: '',
        title: '',
        email: '',
        password: ''
      },
      passwordForm: {
        email: ''
      },
      showLoginForm: true,
      showForgotPassword: false,
      passwordResetSuccess: false,
      performingRequest: false,
      errorMsg: ''
    }
  },
  methods: {
    toggleForm () {
      this.errorMsg = ''
      this.showLoginForm = !this.showLoginForm
    },
    togglePasswordReset () {
      if (this.showForgotPassword) {
        this.showLoginForm = true
        this.showForgotPassword = false
        this.passwordResetSuccess = false
      } else {
        this.showLoginForm = false
        this.showForgotPassword = true
      }
    },
    login () {
      this.performingRequest = true
      fb.auth.signInWithEmailAndPassword(this.loginForm.email, this.loginForm.password).then(user => {
        // console.log(user.user.uid)
        this.$store.commit('setCurrentUser', user.user)
        this.$store.dispatch('fetchUserProfile')
        this.performingRequest = false
        this.$router.push('/dashboard')
      }).catch(err => {
        // console.log(err)
        this.performingRequest = false
        this.errorMsg = err.message
      })
    },
    signup () {
      this.performingRequest = true
      fb.auth.createUserWithEmailAndPassword(this.signupForm.email, this.signupForm.password).then(user => {
        this.$store.commit('setCurrentUser', user.user)
        // this.$store.commit('setCurrentUser', credential.user)
        // create user obj
        // console.log(user.user.uid)
        fb.usersCollection.doc(user.user.uid).set({
          name: this.signupForm.name,
          title: this.signupForm.title
        }).then(() => {
        //   this.$store.dispatch('fetchUserProfile')
        //   this.performingRequest = false
          this.$router.push('/dashboard')
        }).catch(err => {
          // console.log(err)
          this.performingRequest = false
          this.errorMsg = err.message
        })
      }).catch(err => {
        // console.log(err)
        this.performingRequest = false
        this.errorMsg = err.message
      })
    },
    resetPassword () {
      this.performingRequest = true
      fb.auth.sendPasswordResetEmail(this.passwordForm.email).then(() => {
        this.performingRequest = false
        this.passwordResetSuccess = true
        this.passwordForm.email = ''
      }).catch(err => {
        // console.log(err)
        this.performingRequest = false
        this.errorMsg = err.message
      })
    }
  }
}
</script>

<style>
#inspire {
  background-color: rgb(51, 51, 51);
 background: url("https://images.unsplash.com/photo-1557264337-e8a93017fe92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80") no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
