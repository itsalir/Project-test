<template>
   <div class="flex">
        <LogoLayout />
        <div class="flex w-full sm:w-5/12 min-h-screen justify-center bg-[#F5F5F5]">
            <div class="flex flex-col self-center items-center justify-center ">
                <h1 class="title mb-4">
                    لطفا کد تایید را وارد کنید
                </h1>
                <p class="text mb-4">کد به شماره {{$route.params.phone}} پیامک شده است</p>
                <VarndarOtp /> 

                <VarndarButton title="تایید رمز جدید" classContainer="mt-4" />
                <div>
                    <p class="cancel">تغییر شماره تلفن</p>

                </div>
            </div>

        </div>
        <!-- <VarndarButton />
    <VarndarInput />
    <VarndarOtp /> -->
</div>
</template>
<script>
import LogoLayout from "./components/LogoLayout.vue"
import VarndarButton from "../../components/Button/VarndarButton.vue"
import VarndarOtp from "../../components/inputs/VandarOtp.vue"

export default {
    name: "OtpPage",
    components: {
        LogoLayout,
        VarndarButton,
        VarndarOtp,

    },
}
</script>

<style lang="scss" scoped>
.title {
    font-family: 'IRANSans';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 44px;
    text-align: center;
    color: #333333;
}
.text {
    font-family: 'IRANSans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    color: #333333;
}

.cancel {
    font-family: 'IRANSans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: right;
    color: #4C9F87;
    cursor: pointer;
    margin : 32px 0 0 0;

}
</style>