<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/">TheBooq</b-navbar-brand>
      
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/searchsite">SearchInitPage</b-nav-item>
          <b-nav-item href="/searchsiteresults">SearchResults</b-nav-item>
          <b-nav-item href="/single">SingleArticle</b-nav-item>
          <b-nav-item href="/modeedit">Edit</b-nav-item>
          <b-nav-item href="/users">Users</b-nav-item>
          <b-nav-item href="/about">About</b-nav-item>
        </b-navbar-nav>
        
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          
          <b-nav-form>
            <b-input-group size="lg">
              <b-form-input class="mr-sm-2" id="s" placeholder="Search" size="sm">
              </b-form-input>
              <b-button id="s_button" ref="button" variant="warning">
                <b-icon icon="search" variant="success"></b-icon>
              </b-button>
            </b-input-group>
            <!--<b-button id="s_button" size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>-->
          </b-nav-form>
          
          <b-nav-item-dropdown right text="Lang">
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>
          
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Log In</b-dropdown-item>
            <b-dropdown-item href="#">Sign In</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<style scoped>
  #s {
    width: 30vw;
  }
</style>
<script>
  export default {
    name: "Navresults"
  }
</script>

<style scoped>

</style>
