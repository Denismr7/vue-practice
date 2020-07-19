<template>
<div>
  <h1>Sign up to Collaborate!</h1>
  <form @submit.prevent="handleSubmit">
    <label for="name">Name</label>
    <input v-model="formData.name" type="text" name="name">
    <label for="email">Email</label>
    <input v-model="formData.email" type="text" name="email">
    <button type="submit">Join Now</button>
  </form>
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      formData: {
        name: '',
        email: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'addHero'
    ]),
    handleSubmit () {
      const { name, email } = this.formData
      const payload = {
        name,
        email
      }
      this.addHero(payload)

      this.formData = {
        name: '',
        email: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  * {
    margin: 5px;
  }
}
</style>
