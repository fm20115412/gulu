<template>
    <button class='v-button' :class='{[`icon-${iconPosition}`]:true}'>
        <v-icon v-if='icon' :name='icon'></v-icon>
         <span class='text'>
            <slot>按钮</slot>
         </span>
        
    </button>
</template>
<script>
    export default{
        props:{
            "icon":{},
            "iconPosition":{
                type: String,
                default: "left",
                validator: function (value) {
                    // 这个值必须匹配下列字符串中的一个
                    return ['left', 'right'].indexOf(value) !== -1
                }
            }
        }
    }
</script>
<style lang="scss">
     .v-button{
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        > .icon{
            order: 1;
        }
        > .text{
            order: 2;
        }
        &.icon-right{
            > .icon{
                order: 2;
            }
            > .text{
                order: 1;
            }
        }
        &:hover{
            background-color: var(--border-hover-bg);
        }
        &:focus{
            outline: none;
        }
        &:active{
            background-color: var(--border-active-bg);
        }
        .icon{
        width: 1em;
        height: 1em;
        color:green;
    }
    }
    
</style>

