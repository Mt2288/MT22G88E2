<template>
  <div
    class="modal fade"
    id="modalFormProductos"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header headerRegister">
          <h5 class="modal-tittle" id="titleModal">Nuevo Producto</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="close"
          >
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div class="modal-body">
          <form
            id="formaProductos"
            name="formProductos"
            class="form-horizontal"
          >
            <input type="hidden" id="idProducto" name="idProducto" value="" />
            <p class="text-primary">Todos los campos son obligatorios.</p>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="txtCode">Código de producto</label>
                <input
                  type="text"
                  class="form-control valid validText"
                  name="txtCode"
                  id="txtCode"
                  v-model="form.code"
                  required
                />
              </div>
              <div class="form-group col-md-6">
                <label for="txtNombre">Nombre</label>
                <input
                  type="text"
                  class="form-control valid validText"
                  name="txtNombre"
                  id="txtNombre"
                  v-model="form.name"
                  required
                />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="txtMarca">Marca</label>
                <input
                  type="text"
                  class="form-control valid validText"
                  name="txtMarca"
                  id="txtMarca"
                  v-model="form.marca"
                  required
                />
              </div>
              <div class="form-group col-md-6">
                <label for="txtCategoria">Categoría</label>
                <input
                  type="text"
                  class="form-control valid validNumber"
                  name="txtCategoria"
                  id="txtCategoria"
                  v-model="form.category"
                  required
                />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="txtStock">Stock</label>
                <input
                  type="number"
                  class="form-control valid validEmail"
                  name="txtStock"
                  id="txtStock"
                  v-model="form.stock"
                  required
                />
              </div>
              <div class="form-group col-md-6">
                <label for="txtPrecio">Precio</label>
                <input
                  type="number"
                  class="form-control valid validEmail"
                  name="txtPrecio"
                  id="txtPrecio"
                  v-model="form.precio"
                  required
                />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="listStatus">Estado</label>
                <select
                  class="form-control selectpicker"
                  name="listStatus"
                  id="listStatus"
                  v-model="form.status"
                >
                  <option value="Activo">Activo</option>
                  <option value="Inactivo">Inactivo</option>
                </select>
              </div>
            </div>

            <div class="tile-footer">
              <button
                id="btnActionForm"
                class="btn btn-primary"
                type="button"
                @click="login"
                v-on:click="alerta"
              >
                <i class="fa fa-fw fa-lg fa-check-circle"></i
                ><span id="btnText">Guardar</span></button
              >&nbsp;&nbsp;&nbsp;
              <button
                class="btn btn-danger"
                type="button"
                data-bs-dismiss="modal"
              >
                <i class="fa fa-fw fa-lg fa-times-circle"></i>Cerrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        code: "",
        name: "",
        marca: "",
        category: "",
        stock: "",
        precio: "",
        status: "",
      },
    };
  },
  methods: {
    login() {
      let formData = new URLSearchParams();
      formData.append("code", this.form.code);
      formData.append("name", this.form.name);
      formData.append("marca", this.form.marca);
      formData.append("category", this.form.category);
      formData.append("stock", this.form.stock);
      formData.append("precio", this.form.precio);
      formData.append("status", this.form.status);
      axios
        .post("http://localhost:5000/productos", formData, {
          headers: {
            "Access-Control-Allow_Methods": "POST",
          },
        })
        .then((response) => {
          console.log(response.data);
        });
    },
    alerta: function () {
      alert("Producto guardado correctamente");
    },
  },
};
</script>