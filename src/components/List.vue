<template>
  <div>
      <h1>Our Heroes!</h1>
      <div v-for="hero in heroes" :key="hero.name">
          <h2>{{ hero.name }}</h2>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['heroes'])
  }
}
</script>

<style>
</style>
