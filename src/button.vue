<template>
    <button class='v-button'>
         <svg class="icon">
            <use :xlink:href="`#i-${icon}`"></use>
         </svg>
         <slot>按钮</slot>
    </button>
</template>
<script>
    export default{
        props:['icon']
    }
</script>
<style lang="scss">
     .v-button{
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        &:hover{
            background-color: var(--border-hover-bg);
        }
        &:focus{
            outline: none;
        }
        &:active{
            background-color: var(--border-active-bg);
        }
    }
</style>

