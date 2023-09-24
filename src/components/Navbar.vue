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
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link style="color: rgb(224, 199, 251)" class="nav-link" to="/tokens">Datos de Tarjeta</router-link>
            </li>
          </ul>
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