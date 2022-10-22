<template>
    <div :class="classContainer">
        <v-otp-input ref="otpInput" input-classes="otp-input" separator="" :num-inputs="5" :should-auto-focus="true"
        :is-input-num="true" @on-change="handleOnChange" @on-complete="handleOnComplete" />
    </div>
   
</template>

<script>

export default {
    name: "VarndarOtp",
    props: {
        classContainer : String
    },
}


</script>

<style lang="scss" >
.otp-input {
    width: 48px;
    height: 48px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 4px;
    text-align: center;
    margin: 0 6px ;
    font-size: 20px;
    font-family: "IRANSans";

    &:focus {
        border: 1px solid #D5D5D5;
        outline: 0;
    }

}
</style>