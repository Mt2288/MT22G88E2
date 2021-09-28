<template>
  <div id="Inicio">
      <body class="bg-primary">
        <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-5">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Iniciar sesion</h3></div>
                                    <div class="card-body">
                                        <form v-on:submit.prevent="iniciar">
                                          
                                            <div class="form-floating mb-3">
                                                <input class="form-control" id="inputEmail" type="email" placeholder="usuario" v-model="usuario"/>
                                                <label for="inputEmail">Email address</label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input class="form-control" id="inputPassword" type="password" placeholder="password" v-model="password"/>
                                                <label for="inputPassword">Password</label>
                                            </div>
                                            <div class="form-check mb-3">                                              
                                              
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                                            <a href="/crearusuario" class="btn btn-primary" value="Crear">Crear usuario</a>
                                            <input type="submit" class="btn btn-primary" value="log in">
                                                
                                           
                                            </div>
                                        </form>
                                        <div class="alert alert-danger" role="alert" v-if="error">
                                            {{error_msg}}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            
  <router-view/>
              <div id="layoutAuthentication_footer">
                <footer class="py-4 bg-light mt-auto">
                    <div class="container-fluid px-4">
                        <div class="d-flex align-items-center justify-content-between small">
                            <div class="text-muted">Copyright &copy; Your Website 2021</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </body>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Inicio',
  components: {

  },
  data: function () {
      return{
          usuario:"",
          password: "",
         
          error: false,
          error_msg: "",
      }
  },
  methods: {
      iniciar(){
          let json = {
             
              "usuario": this.usuario,
              "password":this.password
          }
          axios.post('http://localhost:5000/login/', json)
          .then((data) => {
              if(data.data.status == "ok"){
                localStorage.setItem('token', data.data.token);
                console.log(localStorage.getItem('token'));
                alert('Inicio de sesion exitoso');
                this.$router.push("/Dashboard");          

              }else{
                  this.error=true;
                  this.error_msg=data.data.status;
              }
            
          });
          
          this.$router.push("/loging");
      }
  }


}
</script>

<style scoped>
.mt-auto {
  margin-top: auto !important;
}
#layoutAuthentication_footer {
  min-width: 0;
  padding: 20px;
}
.px-4 {
  padding-right: 1.5rem !important;
  padding-left: 1.5rem !important;
}
.text-muted {
  --bs-text-opacity: 1;
  color: #6c757d !important;
}


</style>