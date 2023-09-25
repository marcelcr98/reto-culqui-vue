<template>
    <div>
      <div class="col-md-4 offset-4">
        <div class="card card-body">
          <h5 class="card-title my-3 text-center">
            <strong>Detalles de Tarjeta</strong>
          </h5>
          <form>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" style="height: 38px">
                  <i class="fas fa-key" style="font-size: 16px"></i>
                </span>
              </div>
              <input
                class="form-control"
                placeholder="Colocar Token"
                type="text"
                autofocus
                v-model="token"
                style="height: 38px"
                id="token"
              />
            </div>
            <button
              class="btn btn-success w-100"
              @click="consultarTarjeta"
              type="button"
              :disabled="loading || !token"
            >
              <span
                v-if="loading"
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              <span v-else>Consultar</span>
            </button>
          </form>
        </div>
      </div>
      <br><br>
      <table v-if="tarjeta" class="table table-bordered">
        <thead class="thead-dark">
          <tr>
            <th>Número de Tarjeta</th>
            <th>Mes de Vencimiento</th>
            <th>Año de Vencimiento</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ tarjeta.card_number }}</td>
            <td>{{ tarjeta.expiration_month }}</td>
            <td>{{ tarjeta.expiration_year }}</td>
            <td>{{ tarjeta.email }}</td>
          </tr>
        </tbody>
      </table>

      <div v-if="error" class="alert alert-danger" role="alert">
        {{ error }}
      </div>
    </div>
  </template>
  
  <script>
  import Swal from "sweetalert2";
import { getTokens } from '@/services/TokenService';
  export default {
    data() {
      return {
        token: "",
        tarjeta: null,
        loading: false,
        error: null, 
      };
    },
    methods: {
      async consultarTarjeta() {
        const url = `http://localhost:3000/card/token/${this.token}`;
        //const url = await getTokens(this.token);
        const headers = {
          Authorization: "pk_test_0ae8dW2FpEAZlxlz",
        };
        const requestOptions = {
          method: "GET", 
          headers,
        };
  
        try {
          this.loading = true;
          const response = await fetch(url, requestOptions);
          const data = await response.json();
          if (response.status === 200) {
            this.tarjeta = data;
            this.error = null;
          } else {
            this.error = "La tarjeta no se encuentra disponible";
          }
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "¡Error!",
            html: `<h5>La tarjeta no se encuentra disponible</h5>`,
          });
          console.error("Error al consultar la tarjeta:", error);
          this.error = "Error al consultar la tarjeta. Por favor, inténtalo de nuevo.";
        } finally {
          this.loading = false;
          if (this.tarjeta === null) {
            this.tarjeta = null;
          }
        }
      },
    },
  };
  </script>
  