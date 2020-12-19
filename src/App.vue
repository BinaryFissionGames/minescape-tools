<template>
  <div id="app">
    <div id="banner" class="highlight"><p>Minescape Tools</p></div>
    <ul id="slide-out" v-bind:class="slideoutClass">
      <li class="hover-highlight slideout-element">
        <router-link class="slide-out-indent-1" to="/">Home</router-link>
      </li>
      <li>
        <ul>
          <li class="slide-out-indent-1 router-label slideout-element">
            Clue Tools
          </li>
          <li class="hover-highlight slideout-element">
            <router-link class="slide-out-indent-2" to="/lightboxsolver"
              >Light Box Solver</router-link
            >
          </li>
          <li class="hover-highlight slideout-element">
            <router-link class="slide-out-indent-2" to="/anagramsolver"
              >Cipher/Anagram Solver</router-link
            >
          </li>
        </ul>
      </li>
      <li class="hover-highlight slideout-element">
        <a class="slide-out-indent-1" href="https://minescape.net"
          >Minescape.net</a
        >
      </li>
    </ul>
    <div
      id="hamburger-menu-button"
      :class="slideoutButtonClass"
      @click="toggleSlideOut"
    >
      <i class="material-icons">{{ slideOutOpen ? "close" : "menu" }}</i>
    </div>
    <div
      v-if="slideOutOpen"
      @click="toggleSlideOut"
      class="slide-out-overlay"
    ></div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import { Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
  slideOutOpen = false;
  toggleSlideOut() {
    this.slideOutOpen = !this.slideOutOpen;
  }

  get slideoutClass() {
    let cssClass = "dynamic-slide-out-transition background-lighten-1";
    if (this.slideOutOpen) {
      cssClass += " dynamic-slide-out-open";
    } else {
      cssClass += " dynamic-slide-out-closed";
    }
    return cssClass;
  }

  get slideoutButtonClass() {
    let cssClass =
      "btn-floating btn-large waves-light highlight left dynamic-slide-out-transition slide-out-button";
    if (this.slideOutOpen) {
      cssClass += " dynamic-slide-out-button-open";
    } else {
      cssClass += " dynamic-slide-out-button-closed";
    }
    return cssClass;
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 25px;
  text-align: center;
  min-height: 100%;
  min-width: 100%;
}

.slide-out-overlay {
  height: calc(100% - 60px);
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: inline-block;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 60px;
}

.dynamic-slide-out-closed {
  transform: translateX(-105%);
}

.dynamic-slide-out-open {
  transform: translateX(0);
}

.dynamic-slide-out-button-open {
  transform: translateX(300px);
}

.dynamic-slide-out-button-closed {
  transform: translateX(0);
}

.dynamic-slide-out-transition {
  transition: transform 0.5s ease-out !important;
}

.content {
  position: absolute;
  top: 60px;
  padding: 15px;
  width: 100%;
  height: calc(100% - 60px);
}

#banner {
  position: fixed;
  width: 100%;
  margin: 0;
  top: 0;
  z-index: 9999;
  vertical-align: center;
}

#banner > p {
  margin: 0;
  height: 60px;
  text-align: center;
  font-size: 30px;
  vertical-align: center;
}

@media (min-width: 510px) {
  #banner > p {
    margin: 0;
    height: 60px;
    padding-left: 100px;
    text-align: left;
    font-size: 40px;
  }
}

#slide-out {
  position: fixed;
  height: 100%;
  width: 300px;
  margin: 0;
  padding-top: 30px;
  z-index: 99999;
  top: 60px;
}

.slideout-element {
  text-align: left;
  font-size: 20px;
}

.slideout-element > a {
  width: 100%;
  height: 100%;
  display: block;
  padding-top: 10px;
  padding-bottom: 10px;
}

.slide-out-indent-1 {
  padding-left: 20px !important;
}

.slide-out-indent-2 {
  padding-left: 40px !important;
}

.router-link-exact-active {
  background-color: var(--background-color-heighten-3);
}

.router-label {
  font-size: 25px;
  font-weight: bold;
}

#hamburger-menu-button {
  position: fixed;
  left: 10px;
  top: 70px;
  z-index: 10000;
}
</style>
