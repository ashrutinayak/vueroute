<template>
  <div>
    <h2>Contact form</h2>
    <form>
      <label>Name:</label>
      <br />
      <input type="text" />
      <br />
      <label for="Contact number">Mobile No.</label>
      <br />
      <input type="number" />
      <br />
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "contact",
  data() {
    return {};
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  text-align: center;
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
form {
  text-align: center;
}
label {
  padding: 25px;
}
</style>
