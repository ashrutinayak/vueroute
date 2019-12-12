<template>
  <div>
    <ul>
      <li>
        <router-link to="/" exact>{{ Home }}</router-link>
      </li>
      <li>
        <router-link to="/about" exact>{{ About }}</router-link>
      </li>
      <li>
        <router-link to="/contact" exact>{{ Contact }}</router-link>
      </li>
    </ul>
    <!-- <a href="/">{{ Home }}</a>
        <a href="/about">{{ About}}</a>
    <a href="/contact">{{ Contact}}</a>-->
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
  padding: 10px;
}
.router-link-active {
  background-color: #aaa;
  color: #222;
}
</style>
