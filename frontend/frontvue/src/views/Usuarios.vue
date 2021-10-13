<template>
  <div>
    <!-- Page Wrapper -->
    <div id="wrapper">
      <!-- Sidebar -->
      <AppSidebar />
      <!-- End of Sidebar -->

      <!-- Content Wrapper -->
      <div id="content-wrapper" class="d-flex flex-column">
        <!-- Main Content -->
        <div id="content">
          <!-- Topbar -->
          <Header />
          <!-- End of Topbar -->

          <!-- Begin Page Content -->
          <div class="container-fluid">
            <!-- Page Heading -->
            <div class="d-sm-flex align-items-center justify-content-left mb-4">
              <h1 class="h3 mb-0 text-gray-800">
                Usuarios
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#modalFormUsuario"
                >
                  <i class="fas fa-plus-circle"></i> Nuevo
                </button>
              </h1>
            </div>
            <UsersTable></UsersTable>

            <ModalUsers></ModalUsers>
          </div>
          <!-- /.container-fluid -->
        </div>
        <!-- End of Main Content -->
      </div>
      <!-- End of Content Wrapper -->
    </div>
    <!-- End of Page Wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
      <i class="fas fa-angle-up"></i>
    </a>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import AppSidebar from "@/components/AppSidebar.vue";
import UsersTable from "@/components/UsersTable.vue";
import ModalUsers from "@/components/ModalUsers.vue";

export default {
  name: "Usuarios",
  components: {
    Header,
    AppSidebar,
    UsersTable,
    ModalUsers,
  },
};
</script>