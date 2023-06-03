<script>
    import NavBarButton from './NavBarButton.svelte'
    
    // let buttons = [
    //     { main: 'Home', sub: []},
    //     { main: 'Roster', sub: ['Character', 'Engravings']},
    //     { main: 'About', sub: []},
    //     { main: 'Contact', sub: []}
    //     ]

    export let buttons = ['']
    let mediaButtons = ['Twitter', 'Discord', 'Contact']
</script>

<!-- Logo/Icon -->
<a href="/" class="cursor-pointer px-5 flex items-center xl:hidden"><img class="h-12" src=" /images/LostArkIcon.png" alt="icon"></a>
<a href="/" class="cursor-pointer px-5 items-center hidden xl:flex"><img class="h-12" src=" /images/LostArkLogo.png" alt="logo"></a>

<!-- Main Navigation -->
<nav class="hidden xl:flex">
    <ul class="flex">
        {#each buttons as button}
            <NavBarButton {button}/>      
        {/each}        
    </ul>
</nav>
<!-- <ul class="flex flex-wrap items-center justify-center mb-6 text-gray-900 dark:text-red-700"> -->

<!-- Media Navigation -->
<nav class="flex ml-auto pr-5">
    <ul class="flex">
        {#each mediaButtons as button}
            <NavBarButton {button}/>      
        {/each}
    </ul>
</nav>
