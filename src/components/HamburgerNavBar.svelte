<script>
    export let buttons = ['']
    export let isOpen = false
    import HamburgerNavButton from './HamburgerNavButton.svelte'
</script>

<!-- Hamburger Links -->
<nav class="text-white {isOpen ? 'block' : 'hidden'} xl:hidden">
    <ul class="flex flex-col">
        {#each buttons as button}
            <HamburgerNavButton {button}/>      
        {/each}        
    </ul>
</nav>