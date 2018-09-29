<template>
    <button class='v-button'>按钮</button>
</template>
<script>
    export default{}
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

