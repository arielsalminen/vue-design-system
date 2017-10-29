<template>
  <component :is="type">
    <nav-bar active="Posts" :navItems="[{name: 'Dashboard', component: 'Dashboard', href: '/#/'}, {name: 'Posts', component: 'Posts', href: '/#/posts'}, {name: 'Settings', component: 'Settings', href: '/#/settings'}, {name: 'Style Guide', href: 'http://localhost:6060/'}]" />
    <wrapper>
      <heading level="h3">Posts</heading>
      <ul class="list">
        <li>
          <text-link href="#">Item 1</text-link>
        </li>
        <li>
          <text-link href="#">Item 2</text-link>
        </li>
        <li>
          <text-link href="#">Item 3</text-link>
        </li>
        <li>
          <text-link href="#">Item 4</text-link>
        </li>
        <li>
          <text-link href="#">Item 5</text-link>
        </li>
      </ul>
    </wrapper>
  </component>
</template>

<style lang="scss" scoped>
  .list {
    color: $color-primary-rich-black;
  }
</style>

<script>
  import Heading from '@/elements/Heading';
  import TextStyle from '@/elements/TextStyle';
  import TextLink from '@/elements/TextLink';
  import Wrapper from '@/elements/Wrapper';
  import NavBar from '@/patterns/NavBar';

  export default {
    name: 'Posts',
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
  <posts/>
  ```
</docs>
