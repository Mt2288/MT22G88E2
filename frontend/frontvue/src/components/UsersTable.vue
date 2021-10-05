<template>
  <div id="tareas">
    <div class="row pt-5">
      <div class="col-md-12">
        <div class="tile">
          <div class="tile-body">
            <div class="table-responsive">
              <table class="table table-striped table-hover">
                <thead class="table-white">
                  <tr>
                    <th>Documento</th>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Teléfono</th>
                    <th>Correo electrónico</th>
                    <th>Tipo de usuario</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="task in tasks" v-bind:key="task.id">
                    <td>{{ task.identificacion }}</td>
                    <td>{{ task.name }}</td>
                    <td>{{ task.lastname }}</td>
                    <td>{{ task.telephone }}</td>
                    <td>{{ task.email }}</td>
                    <td>{{ task.typeusername }}</td>
                    <td>
                      <span
                        v-if="task.status == 'Activo'"
                        class="badge badge-pill badge-success"
                      >
                        {{ task.status }}</span
                      >
                      <span v-else class="badge badge-pill badge-danger">
                        {{ task.status }}</span
                      >
                    </td>

                    <td>
                      <button
                        data-bs-target="#modalFormUsuario"
                        data-bs-toggle="modal"
                        class="btn btn-primary btn-sm"
                        @click="actualizarTask(task._id)"
                        title="Editar"
                      >
                        <i class="fas fa-pencil-alt" aria-hidden="true"></i>
                      </button>

                      <button
                        class="btn btn-danger btn-sm"
                        @click="deleteTask(task._id)"
                        title="Eliminar"
                      >
                        <i class="far fa-trash-alt" aria-hidden="true"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import ModalUsers from "@/components/ModalUsers.vue";
class Task {
  constructor(
    identificacion,
    name,
    lastname,
    telephone,
    email,
    typeusername,
    status
  ) {
    this.identificacion = identificacion;
    this.name = name;
    this.lastname = lastname;
    this.telephone = telephone;
    this.email = email;
    this.typeusername = typeusername;
    this.status = status;
  }
}
export default {
  name: "UsersTable",
  components: {
    //ModalUsers,
  },
  data() {
    return {
      task: new Task(),
      tasks: [],
      edit: false,
      taskToEdit: "",
      isModalVisible: false,
    };
  },
  created() {
    this.getTasks();
  },
  methods: {
    getTasks() {
      fetch("http://localhost:5000/")
        .then((res) => res.json())
        .then((data) => {
          this.tasks = data;
          console.log(this.tasks);
        });
    },
    deleteTask(id) {
      fetch("http://localhost:5000/" + id, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          this.getTasks(data);
        });
    },
    actualizarTask(id) {
      fetch("http://localhost:5000/" + id)
        .then((res) => res.json())
        .then((data) => {
          this.task = new Task(
            data.documento,
            data.nombres,
            data.apellidos,
            data.telefono,
            data.correo,
            data.typeusername,
            data.estado,
            data.password
          );
          this.taskToEdit = data._id;
          this.edit = true;
        });
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>


<style scoped>
#tareas {
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 10%;
}
</style>