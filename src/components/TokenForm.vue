<template>
    <div class="col-md-4 offset-4">
      <div class="card card-body">
        <img style="display: block; margin-left: auto; margin-right: auto; width: 80%;" src="https://theme.zdassets.com/theme_assets/1286016/e9a8fe68878aebd9fce520c800b95b18aa2a0e0b.png" >
        <h5 class="card-title my-3 text-center"><strong>Registrar Tarjeta</strong></h5>
        <form >
          <input
            class="form-control mb-3"
            placeholder="Correo"
            type="text"
            autofocus
          />

          <input
            class="form-control mb-3"
            placeholder="N° Tarjeta"
            type="text"
            autofocus
          />

          <input
            class="form-control mb-3"
            placeholder="CVV"
            type="number"
            autofocus
          />


          <input
            class="form-control mb-3"
            placeholder="Mes de expiración"
            type="number"
            autofocus
          />

          <input
            class="form-control mb-3"
            placeholder="Año de expiración"
            type="number"
            autofocus
          />

          <button
            class="btn btn-success w-100"
          >
            Registrar
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";

  
  export default defineComponent({
    name: "token",

  });
  </script>