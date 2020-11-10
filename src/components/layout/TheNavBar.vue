<template>
  <nav class="main-nav">
    <ul class="main-nav__items">
      <li class="main-nav__item">
        <a href="packages/index.html">Packages</a>
      </li>
      <li class="main-nav__item">
        <a href="customers/index.html">Customers</a>
      </li>
      <li class="main-nav__item main-nav__item--cta">
        <a href="start-hosting/index.html">Start Hosting</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.main-nav {
  display: inline-block;
  text-align: right;
  vertical-align: middle;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  margin: 0;
  border: 5px solid purple;
}

.main-nav__items {
  margin: 0;
  padding: 0;
  list-style: none;
}
.main-nav__item {
  display: inline-block;

  margin: 0 16px;
}
.main-nav__item a {
  text-decoration: none;
  color: #0e4f1f;
  padding: 3px 0;
}
.main-nav__item a:hover,
.main-nav__item a:active {
  color: white;
  border-bottom: 5px solid white;
}

.main-header__brand {
  color: #0e4f1f;
  text-decoration: none;
  font-weight: bold;
  font-size: 22px;
}
.main-nav__item--cta a {
  color: white;
  background: red;
  padding: 8px 16px;
  border-radius: 8px;
}
.main-nav__item--cta a:hover,
.main-nav__item--cta a:active {
  color: red;
  background: white;
  border: none;
}
</style>