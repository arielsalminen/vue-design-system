<template>
  <component :is="type" class="nav">
    <a v-for="item in navItems" :href="item.href" :class="{active: localActive === item.component}" v-html="item.name"></a>
  </component>
</template>

<script>
/**
 * Used as main page navigation in templates.
 */
export default {
  name: "NavBar",
  status: "ready",
  release: "1.0.0",
  model: {
    prop: "active",
  },
  props: {
    /**
     * The html element name used for the nav bar.
     */
    type: {
      type: String,
      default: "nav",
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
        this.$emit("input", val)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
// Local component variables
$color-nav-link: $color-bleu-de-france;
$color-nav-link-active: $color-bleu-de-france;

.nav {
  font-family: $font-family-text;
  font-size: $font-size-small;
  line-height: $line-height-base;
  color: $color-white;
  margin: $space-base 0;
  text-align: center;
  width: 100%;
  @media #{$media-query-large} {
    // This is how you’d use design tokens with media queries
  }
  a {
    color: $color-nav-link;
    padding: $space-tiny 0;
    margin: 0 $space-tiny;
    text-decoration: none;
    display: inline-block;
    &:hover {
      color: $color-nav-link-active;
    }
    &.active {
      border-bottom: 2px solid $color-nav-link;
      font-weight: $font-weight-bold;
      color: $color-nav-link;
    }
  }
}
</style>

<docs>
  ```jsx
  <nav-bar active="Dashboard" :navItems="[
    {name: 'Dashboard', component: 'Dashboard', href: '/'},
    {name: 'Posts', component: 'Posts', href: '/posts'},
    {name: 'Users', component: 'Users', href: '/users'},
    {name: 'Settings', component: 'Settings', href: '/settings'}
  ]"/>
  ```
</docs>
