<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" fixed variant="dark">
      <b-navbar-brand href="/">
        <img class="d-inline-block logo" src="./assets/logo.png" />
        Sample Vue
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
         <!--  <b-nav-item href="/login" v-if="!authenticated">
            Login
          </b-nav-item> -->

          <b-nav-item
            id="messages-button"
            href="/messages"
            v-if="authenticated"
          >
            <i aria-hidden="true" class="mail outline icon"> </i>
            Messages
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em
                ><b v-if="authenticated">{{ claims.name }}</b
                ><b v-else>Menu</b></em
              >
            </template>

            <b-dropdown-item
              href="/profile"
              class="item"
              id="profile-button"
              v-if="authenticated"
            >
              Profile
            </b-dropdown-item>

            <b-dropdown-item
              href="/login"
              id="profile-button"
              v-if="!authenticated"
            >
              Login
            </b-dropdown-item>

            <b-dropdown-item
              href="/"
              id="logout-button"
              class="item"
              v-if="authenticated"
              v-on:click.native="logout()"
            >
              Logout
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!-- <router-link
          id="login-button"
          class="ui primary button"
          role="button"
          to="/login"
          v-if="!this.$parent.authenticated"
        >
          Login
        </router-link> -->

    <div class="ui text container" style="margin-top: 2em;">
      <router-view />
    </div> 
  </div>
</template>

<script>
export default {
  name: "app",
  data: function() {
    return { authenticated: false, claims: "" };
  },
  created() {
    this.isAuthenticated();
  },
  watch: {
    // Everytime the route changes, check for auth status
    $route: "isAuthenticated",
  },
  methods: {
    async isAuthenticated() {
      this.authenticated = await this.$auth.isAuthenticated();
      this.claims = await this.$auth.getUser();
    },
    async logout() {
      await this.$auth.logout();
      await this.isAuthenticated();
    },
  },
};
</script>
