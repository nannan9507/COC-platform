<template>
  <div class="container">
    <section>
      <nuxt/>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    nextStep() {
    },
  }
}
</script>

<style lang="stylus" scoped>
.container {
  min-height: 80vh
  display: flex
  align-items: center
  justify-content: center
  section {
    width: 100%
    height: 100%
  }
}
</style>
