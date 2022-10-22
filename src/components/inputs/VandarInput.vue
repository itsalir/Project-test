<template>
    <div :class="classContainer">
        <v-text-field :name="inputName" v-on:input="(event)=>this.$emit('inputChange',event)" class="containerInput" variant="solo" :label="placeholder" single-line
            @click:append-inner="onClick"></v-text-field>
    </div>

</template>

<script>
export default {
    name: "VarndarInput",
    props: {
        placeholder: String,
        classContainer: String,
        model: String,
        inputName : String,
    }
}
</script>

<style lang="scss" >
.containerInput {
    width: 300px;
    height: 40px;

    & div {
        box-shadow: 0 0 0;
        height: 40px;
    }

    & .v-field__field {
        border: 1px solid #D5D5D5;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;


    }

    & input {
        text-align: center;
        font-family: 'IRANSans';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 24px;
        height: 40px;
    }

    .v-label {
        text-align: center;
        font-family: 'IRANSans';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        width: 100%;
        height: 100%;
        justify-content: center;
        margin-top: -15px
    }

}
</style>