<template>
    <div class="flex">
        <LogoLayout />

        <div class="flex w-full sm:w-5/12 min-h-screen justify-center bg-[#F5F5F5]">
            <div class="flex flex-col self-center items-center justify-center ">
                <h1 class="title mb-4">
                    بازیابی رمز عبور
                </h1>
                <p class="text mb-4">ابتدا رمز جدید را انتخاب کنید</p>
                <VarndarInput placeholder="شماره موبایل " />
                <VarndarInput classContainer="mt-2" placeholder=" موبایل " />
                <VarndarButton title="ادامه" classContainer="mt-4" />
                <p class="cancel">انصراف</p>
            </div>

        </div>
    </div>
</template>


<script>
import LogoLayout from "../SignUp/components/LogoLayout.vue"
import VarndarButton from "../../components/Button/VarndarButton.vue"
import VarndarInput from "../../components/inputs/VandarInput.vue"
export default {
    name: "RecoverPage",
    components: {
        LogoLayout,
        VarndarButton,
        VarndarInput,

    }
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