<script setup>
defineProps({
  msg: {
    type: String,
  }
})
const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out Rspack which support Vue
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
