<template>
    <div class="sm:flex hidden flex-col justify-center w-full h-screen bg-[#FAFAFA]">
        <div class=" h-[350px] w-[400px] self-center">
            <v-img :src="require('../../../assets/img/photo.svg')" class="" contain />
        </div>
        <div class="flex flex-col items-center">
            <h4 class="title select-none">امنیت در سایه نظارت بانک آینده</h4>
            <p class="text mt-2 select-none">تضمین امنیت فنی خدمات وندار در همکاری با بانک آینده</p>
            <p class="moreText mt-2 cursor-pointer">بیشتر بخوانید</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "LogoLayout",
 
}
</script>

<style lang="scss" scoped>
.title {
    font-family: 'IRANSansBold';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 27px;

}

.text {
    font-family: 'IRANSans';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 19px;
    text-align: center;
    color: #333333;
}

.moreText {
    font-family: 'IRANSans';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: right;
    color: #4C9F87;
}
</style>