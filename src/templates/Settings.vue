<template>
  <component :is="type">
    <nav-bar active="Settings" :navItems="[
      {name: 'Dashboard', component: 'Dashboard', href: '/#/'},
      {name: 'Posts', component: 'Posts', href: '/#/posts'},
      {name: 'Settings', component: 'Settings', href: '/#/settings'},
      {name: 'Style Guide', href: 'http://localhost:6060/'}
    ]"/>
    <wrapper>
      <heading level="h3">Settings</heading>
      <icon name="facebook" fill="#00264c" size="20px"/>
      <icon name="twitter" fill="#00264c" size="20px"/>
      <icon name="instagram" fill="#00264c" size="20px"/>
      <icon name="youtube" fill="#00264c" size="20px"/>
    </wrapper>
  </component>
</template>

<script>
  import Heading from '@/elements/Heading';
  import TextStyle from '@/elements/TextStyle';
  import TextLink from '@/elements/TextLink';
  import Wrapper from '@/elements/Wrapper';
  import Icon from '@/elements/Icon';
  import NavBar from '@/patterns/NavBar';

  export default {
    name: 'Settings',
    components: {
      heading: Heading,
      textStyle: TextStyle,
      textLink: TextLink,
      navBar: NavBar,
      wrapper: Wrapper,
      icon: Icon
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
  <settings/>
  ```
</docs>
