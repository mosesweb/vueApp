<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <form
          name="tab-tracker-form"
          autocomplete="off">
          <v-text-field
            label="Email"
            v-model="email"
            autocomplete="new-password"
          ></v-text-field>
          <br>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
            autocomplete="new-password"
          ></v-text-field>
        </form>
        <br>
        <div class="danger-alert error" v-html="error" />
        <div v-html="success" />
        <br>
        <v-btn
          dark
          class="cyan"
          @click="register">
          Register
        </v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null,
      success: null
    }
  },
  watch: {
    email (value) {
      console.log('email has changed value ' + value)
    }
  },
  methods:
  {
    async register () {
      try {
        const response = await AuthenticationService.register(
          {
            email: this.email,
            password: this.password
          })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.success = `hej hej ${response.data.user.email}!`
        this.$router.push({ name: 'songs' })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
