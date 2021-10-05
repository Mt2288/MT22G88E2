<template>
  <div id="tareas">
    <div class="container">
      <div class="row pt-5">
        <div class="col-md-14">
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Tipo</th>
                <th>Nombre</th>
                <th>Valor</th>
                <th>Cantidad</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="task in tasks" v-bind:key="task.id">
                <td>{{ task.identificacion }}</td>
                <td>{{ task.tipo }}</td>
                <td>{{ task.nombre }}</td>
                <td>{{ task.valor }}</td>
                <td>{{ task.cantidad }}</td>

                <td>
                  <button @click="deleteTask(task._id)" class="btn btn-danger">
                    Borrar
                  </button>
                  <button
                    data-bs-target="#modalFormProductos"
                    data-bs-toggle="modal"
                    @click="actualizarTask(task._id)"
                    class="btn btn-secondary"
                  >
                    Actualizar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import ModalUsers from "@/components/ModalUsers.vue";
class Task {
  constructor(identificacion, tipo, nombre, valor, cantidad) {
    this.identificacion = identificacion;
    this.tipo = tipo;
    this.nombre = nombre;
    this.valor = valor;
    this.cantidad = cantidad;
  }
}
export default {
  name: "ProductsTable",
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
      fetch("http://localhost:5000/productos")
        .then((res) => res.json())
        .then((data) => {
          this.tasks = data;
          console.log(this.tasks);
        });
    },
    deleteTask(id) {
      fetch("http://localhost:5000/productos/" + id, {
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