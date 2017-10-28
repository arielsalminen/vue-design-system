<template>
  <component :is="type" class="nav">
    <a v-for="item in navItems" :href="item.href" :class="{active: localActive === item.component}" v-html="item.name"></a>
  </component>
</template>

<script>
  export default {
    name: 'NavBar',
    model: {
      prop: 'active',
    },
    props: {
      /**
       * The html element name used for the nav bar.
       */
      type: {
        type: String,
        default: 'nav'
      },
      /**
       * State which tab is active when initiated (using name of the component).
       */
      active: {
        required: true,
        type: String,
      },
      /**
       * Menu items to be displayed on the nav bar.
       */
      navItems: {
        required: true,
        type: Array,
      },
    },
    computed: {
      localActive: {
        get() {
          return this.active
        },
        set(val) {
          this.$emit('input', val)
        },
      },
    },
  }
</script>

<style lang="scss" scoped>
  .nav {
    margin: map-get($spacing, base) 0;
    line-height: $line-height-base;
    font-family: $font-primary;
    font-size: map-get($font-size, small);
    color: map-get($color, primary-white);
    text-align: center;
    width: 100%;
    a {
      padding: map-get($spacing, tiny) 0;
      margin: 0 map-get($spacing, tiny);
      text-decoration: none;
      display: inline-block;
      color: map-get($color, primary-oxford-blue);
      &.active {
        color: map-get($color, primary-vermilion);
        border-bottom: 2px solid map-get($color, primary-vermilion);
      }
    }
  }
</style>

<docs>
  ```jsx
  <nav-bar active="Dashboard" :navItems="[{name: 'Dashboard', component: 'Dashboard', href: '/'}, {name: 'Posts', component: 'Posts', href: '/posts'}, {name: 'Users', component: 'Users', href: '/posts'}, {name: 'Settings', component: 'Settings', href: '/settings'}]" />
  ```
</docs>
