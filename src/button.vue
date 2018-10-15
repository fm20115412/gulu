<template>
    <button class='v-button' :class='{}'>
         <svg class="icon">
            <use :xlink:href="'#i-'+icon"></use>
         </svg>
         <span class='text'>
            <slot>按钮</slot>
         </span>
        
    </button>
</template>
<script>
    export default{
        props:['icon','iconPosition']
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
    .icon{
        width: 3em;
        height: 2em;
        color:green;
    }
</style>

