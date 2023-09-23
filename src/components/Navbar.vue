<template>
    <nav  class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div class="container">
        <router-link class="navbar-brand" to="/">Culqui Token Card</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        </div>
      </div>
    </nav>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "Navbar",
  });
  </script>