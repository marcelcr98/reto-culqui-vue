<template>
  <div id="axiosForm">
    <div class="col-md-4 offset-4">
      <div class="card card-body">
        <img
          style="
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 80%;
          "
          src="https://theme.zdassets.com/theme_assets/1286016/e9a8fe68878aebd9fce520c800b95b18aa2a0e0b.png"
        />
        <h5 class="card-title my-3 text-center">
          <strong>Registrar Tarjeta</strong>
        </h5>
        <form>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" style="height: 38px">
                <i class="fas fa-envelope" style="font-size: 16px"></i>
              </span>
            </div>
            <input
              class="form-control"
              placeholder="Correo"
              type="email"
              autofocus
              v-model="card.email"
              style="height: 38px"
            />
          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" style="height: 38px">
                <i class="fas fa-credit-card" style="font-size: 15px"></i>
              </span>
            </div>
            <input
              class="form-control"
              placeholder="N° Tarjeta"
              type="text"
              autofocus
              v-model="card.card_number"
              style="height: 38px"
              maxlength="16"
            />
          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" style="height: 38px">
                <i class="fas fa-lock" style="font-size: 15px"></i>
              </span>
            </div>
            <input
              class="form-control"
              placeholder="CVV"
              type="text"
              autofocus
              v-model="card.cvv"
              style="height: 38px"
              maxlength="3"
            />
          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" style="height: 38px">
                <i class="fas fa-calendar" style="font-size: 15px"></i>
              </span>
            </div>
            <input
              class="form-control"
              placeholder="Mes de expiración"
              type="text"
              autofocus
              v-model="card.expiration_month"
              style="height: 38px"
              maxlength="2"
            />
          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" style="height: 38px">
                <i class="fas fa-calendar" style="font-size: 15px"></i>
              </span>
            </div>
            <input
              class="form-control"
              placeholder="Año de expiración"
              type="text"
              autofocus
              v-model="card.expiration_year"
              style="height: 38px"
            />
          </div>

          <button
            class="btn btn-success w-100"
            @click="saveTask()"
            type="button"
            :disabled="
              (loading && !card.email) ||
              !card.card_number ||
              !card.cvv ||
              !card.expiration_month ||
              !card.expiration_year
            "
          >
            <span
              v-if="loading"
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            <span v-else>Registrar</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>


  
  <script lang="ts">
import { defineComponent } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { Token } from "@/interfaces/Token";
import { createToken } from "@/services/TokenService";
import Swal from "sweetalert2";

export default defineComponent({
  error: undefined,

  name: "token",

  data() {
    return {
      card: {} as Token,
      loading: false,
    };
  },
  methods: {
    async saveTask() {
      try {
        this.loading = true;
        const res = await createToken(this.card);
        res.toString;
        console.log(res);
        Swal.fire("¡Token Generado!", "Token: " + res.data.token, "success");
      } catch (error: any) {
        Swal.fire({
          icon: "error",
          title: "¡Error!",
          html: `${error.response.data.message}`,
        });
        console.error(error);
      } finally {
        this.loading = false;
      }
    },

    showToatWarning() {
      toast.warning("Advertencia!", {
        autoClose: 1000,
      });
    },
    showToatSuccess() {
      toast.success("Exitoso!", {
        autoClose: 1000,
      });
    },
    showToatInfo() {
      toast.info("Info!", {
        autoClose: 1000,
      });
    },

  },
});
</script>