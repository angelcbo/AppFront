<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <a class="navbar-brand d-block d-sm-block d-md-block d-lg-none" href="#">
            <img src="img/logo-dark.png" width="145" height="32.3" alt="QuillPro">
        </a>
        <button class="hamburger hamburger--slider" type="button" data-target=".sidebar" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle Sidebar">
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
        </button>

        <div class="collapse navbar-collapse" id="navbar-header-content">
            <ul class="navbar-nav navbar-language-translation mr-auto"></ul>

            <ul class="navbar-nav ml-5 navbar-profile">
                <!-- <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbar-dropdown-navbar-profile" data-toggle="dropdown" data-flip="false" aria-haspopup="true" aria-expanded="false">
                        <div class="profile-name">
                            {{username}}
                        </div>
                        <div class="profile-picture bg-gradient bg-primary has-message float-right">
                            <img src="img/profile-pic.jpg" width="44" height="44">
                        </div>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-dropdown-navbar-profile">
                        <li>
                            <a class="dropdown-item" href="">Cambiar Contraseña</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="">Cerrar Sesión</a>
                        </li>
                    </ul>
                </li> -->
                <li class="nav-item dropdown">
                    <a class="nav-link" @click="logout" >
                       Salir
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'TopBar',
  props: {
    msg: String,
  },
  data() {
    let username = localStorage.getItem('username');
    if (!username) {
      username = 'N/A';
    }
    return {
      username,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
        .then(
          () => this.$router.push('/'),
        ).catch(err => console.log(err));
    },
  },
};
</script>
