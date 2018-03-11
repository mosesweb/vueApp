<template>
  <div>
    <h2>Register</h2>
      <p>register</p>
    <input
    @click="register"
    v-model="email"
    type="email"
    name="email"
    placeholder="email" />
    <br /><br />
    <input
    v-model="password"
    type="password"
    name="password"
    placeholder="password" />
  <br />
  <button
  @click="register"
  >Register</button>
  </div>
</template>
<script>
import AuthenticationService from '@/../services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  watch: {
    email (value) {
      console.log('email has changed value ' + value)
    }
  },
  mounted () {
    setTimeout(() => {
      this.email = 'hello world'
    }, 2000)
  },
  methods:
  {
    async register () {
      const response = await AuthenticationService.register(
        {
          email: this.email,
          password: this.password
        })
      console.log(response.data)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
