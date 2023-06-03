<script>
  import "../app.css";
  import NavBar from "../components/NavBar.svelte";
  import HamburgerNavBar from "../components/HamburgerNavBar.svelte"  
  import HamburgerButton from "../components/HamburgerButton.svelte"

  let isOpen = false
  let buttons = ['Roster', 'Tracker', 'About']

  function onClickHamburgerBtn() {
    isOpen = !isOpen
  }
</script>

<!-- flex-wrap -->
<header class="bg-neutral-900">
  <div class="flex justify-start min-w-max h-20">
    <NavBar {buttons}/>
    <HamburgerButton on:click={onClickHamburgerBtn} {isOpen}/>
  </div>

  <HamburgerNavBar {buttons} {isOpen}/>
</header>

<slot />


