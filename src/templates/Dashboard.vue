<template>
  <component :is="type">
    <nav-bar active="Dashboard" :navItems="[{name: 'Dashboard', component: 'Dashboard', href: '/'}, {name: 'Posts', component: 'Posts', href: '/posts'}, {name: 'Settings', component: 'Settings', href: '/settings'}, {name: 'Style Guide', href: 'http://localhost:6060/'}]" />
    <wrapper>
      <heading level="h3">Dashboard</heading>
      <text-style>Hello world!</text-style>
      <text-link href="https://viljamis.com/2017/design-tools-processes/" target="_blank">This is a link</text-link>
    </wrapper>
  </component>
</template>

<script>
  import Heading from '@/elements/Heading';
  import TextStyle from '@/elements/TextStyle';
  import TextLink from '@/elements/TextLink';
  import Wrapper from '@/elements/Wrapper';
  import NavBar from '@/patterns/NavBar';

  export default {
    name: 'Dashboard',
    components: {
      heading: Heading,
      textStyle: TextStyle,
      textLink: TextLink,
      navBar: NavBar,
      wrapper: Wrapper
    },
    props: {
      /**
       * The html element name used for the component
       */
      type: {
        type: String,
        default: 'div'
      }
    }
  };
</script>

<style lang="scss" scoped>
</style>

<docs>
  ```jsx
  <dashboard/>
  ```
</docs>
