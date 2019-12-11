<template>
  <footer>{{ copyright }}</footer>
</template>

<script>
export default {
  data() {
    return {
      copyright: "Copyright @2019"
    };
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  background: #222;
  padding: 10px;
}

li {
  display: inline-block;
  margin: 0 10px;

  color: #aaa;
}

a {
  color: #42b983;
}
footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 97%;
  background: #222;
  color: #aaa;
  text-align: center;
  margin: 10px;
  padding: 10px;
}
</style>
