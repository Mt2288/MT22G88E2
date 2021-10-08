<template>
  <div
    class="modal fade"
    id="modalFormUsuario"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header headerRegister">
          <h5 class="modal-tittle" id="titleModal">Nuevo Usuario</h5>
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
            id="formUsuario"
            name="formUsuario"
            class="form-horizontal"
            v-on:submit.prevent="newUser"
          >
            <input type="hidden" id="idUsuario" name="idUsuario" value="" />
            <p class="text-primary">Todos los campos son obligatorios.</p>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="txtID">No. de documento</label>
                <input
                  type="text"
                  class="form-control valid validText"
                  name="txtID"
                  id="txtID"
                  v-model="form.identificacion"
                  required
                />
              </div>
              <div class="form-group col-md-6">
                <label for="txtNombre">Nombres</label>
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
                <label for="txtlastname">Apellidos</label>
                <input
                  type="text"
                  class="form-control valid validText"
                  name="txtlastname"
                  id="txtlastname"
                  v-model="form.lastname"
                  required
                />
              </div>
              <div class="form-group col-md-6">
                <label for="txtCategoria">Telefono</label>
                <input
                  type="text"
                  class="form-control"
                  name="txtTelefono"
                  id="txtTelefono"
                  v-model="form.telephone"
                  required="true"
                />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="txtEmail">Correo electrónico</label>
                <input
                  type="email"
                  class="form-control"
                  name="txtEmail"
                  id="txtEmail"
                  v-model="form.email"
                  required
                />
              </div>
              <div class="form-group col-md-6">
                <label for="listTypeUser">Tipo de usuario</label>
                <select
                  class="form-control"
                  name="listTypeUser"
                  id="listTypeUser"
                  v-model="form.typeusername"
                  required
                >
                  <option value="Administrador">Administrador</option>
                  <option value="Vendedor">Vendedor</option>
                </select>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="listStatus">Estado</label>
                <select
                  class="form-control"
                  name="listStatus"
                  id="listStatus"
                  v-model="form.status"
                  required
                >
                  <option value="Activo">Activo</option>
                  <option value="Inactivo">Inactivo</option>
                </select>
              </div>
              <div class="form-group col-md-6">
                <label for="txtPassword">Contraseña</label>
                <input
                  type="password"
                  class="form-control"
                  name="txtPassword"
                  id="txtPassword"
                  v-model="form.password"
                  required
                />
              </div>
            </div>

            <div class="tile-footer">
              <input
                ref="Close"
                type="submit"
                id="btnActionForm"
                class="btn btn-primary"
              />
              &nbsp;&nbsp;
              <input
                type="submit"
                value="Cerrar"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      modal: false,
      form: {
        identificacion: "",
        name: "",
        lastname: "",
        telephone: "",
        email: "",
        typeusername: "",
        status: "",
        password: "",
      },
    };
  },
  methods: {
    newUser() {
      let formData = new URLSearchParams();
      formData.append("identificacion", this.form.identificacion);
      formData.append("name", this.form.name);
      formData.append("lastname", this.form.lastname);
      formData.append("telephone", this.form.telephone);
      formData.append("email", this.form.email);
      formData.append("typeusername", this.form.typeusername);
      formData.append("status", this.form.status);
      formData.append("password", this.form.password);
      axios
        .post("http://localhost:5000/register", formData, {
          headers: {
            "Access-Control-Allow_Methods": "POST",
          },
        })
        .then((response) => {
          if (response.status == 200) {
            console.log(response.data);
            this.success();
          } else {
            this.error();
          }
        });
    },
    success() {
      Swal.fire({
        icon: "success",
        text: "Usuario guardado correctamente",
      }).then(() => {
        this.$router.push("/usuarios");
      });
    },
    error() {
      Swal.fire({
        icon: "error",
        text: "Error!",
      });
    },
  },
};
</script>