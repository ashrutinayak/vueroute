<template>
  <div>
    <ul>
      <li>
        <a href="/">{{ Home }}</a>
        <a href="/about">{{ About}}</a>
        <a href="/contact">{{ Contact}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Home: "Home",
      About: "About Us",
      Contact: "Contact Us"
    };
  },
  methods: {}
};
</script>

<style scoped>
h3 {
  text-align: center;
}
ul {
  list-style-type: none;
  background: #222;
  padding: 10px;
}

li {
  text-align: center;
  display: inline-block;
  margin: 0 10px;
  padding-left: 5px;

  color: #aaa;
}

a {
  color: #42b983;
  padding: 30px;
}
</style>
