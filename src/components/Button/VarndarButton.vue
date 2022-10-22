<template>
        <v-btn @click="onClick" depressed class="container" :class="classContainer" v-bind="$attrs">
            {{title}}
        </v-btn>
</template>

<script>
export default {
    name: "VarndarButton",
    props: {
    classContainer: String,
    title: String,
    onClick: Function,
  }
  
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 46px;
    border-radius: 4px;
    background: #4C9F87;
    font-family: 'IRANSans';
    color: #FFFFFF;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
}
</style>