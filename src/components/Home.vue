<template>
  <div id="home">
    <div v-if="this.$parent.authenticated">
      <p>Welcome back, {{ claims.name }}!</p>
      <p>
        You have successfully authenticated against your Okta org, and have been
        redirected back to this application. You now have an ID token and access
        token in local storage. Visit the <a href="/profile">My Profile</a> page
        to take a look inside the ID token.
      </p>
      <Books></Books>
      <!-- <h3>Next Steps</h3>
      <p>
        Currently this application is a stand-alone front end application. At
        this point you can use the access token to authenticate yourself against
        resource servers that you control.
      </p>
      <p>
        This sample is designed to work with one of our resource server
        examples. To see access token authentication in action, please download
        one of these resource server examples:
      </p>
      <ul>
        <li v-for="(example, index) in resourceServerExamples" :key="index">
          <a :href="example.url">{{ example.label }}</a>
        </li>
      </ul>
      <p>
        Once you have downloaded and started the example resource server, you
        can visit the <a href="/messages">My Messages</a> page to see the
        authentication process in action.
      </p> -->
    </div>
    <div v-else>
      <b-jumbotron bg-variant="light">
        <template #header
          >BootstrapVue / Python Flask / Vue JS</template
        >

        <template #lead> </template>

        <hr class="my-4" />

        <p>
          Please login to continue
          <b-button
            variant="primary"
            id="login-button"
            href="/login"
            v-if="!this.$parent.authenticated"
            >Login</b-button
          >
        </p>
        
      </b-jumbotron>
   
    </div>
  </div>
</template>


<script>
import Books from "./Books"

export default {
  name: "home",
  components:{
      Books
  },
  data: function() {
    return {
      claims: "",
      resourceServerExamples: [
        {
          label: "Node/Express Resource Server Example",
          url:
            "https://github.com/okta/samples-nodejs-express-4/tree/master/resource-server",
        },
        {
          label: "Java/Spring MVC Resource Server Example",
          url:
            "https://github.com/okta/samples-java-spring-mvc/tree/master/resource-server",
        },
      ],
    };
  },
  created() {
    this.setup();
  },
  methods: {
    async setup() {
      this.claims = await this.$auth.getUser();
    },
  },
};
</script>
