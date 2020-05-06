<template>
  <iframe width="100%" height="850" :src="src" style="border:none" />
</template>
<script>
export default {
  computed: {
    src() {
      return 'http://127.0.0.1:8088/druid/index.html'
      // return 'http://localhost:8088/druid/index.html';
    }
  }
}
</script>
