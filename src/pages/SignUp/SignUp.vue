<template >
    <div class="flex">
        <LogoLayout />
        <div class="flex w-full sm:w-5/12 min-h-screen justify-center bg-[#F5F5F5]">
            <div class="flex flex-col self-center items-center justify-center ">
                <h1 class="title mb-4">
                    ثبت نام
                </h1>
                <VarndarInput  type="number" inputName="phone" v-on:inputChange="handleOnChange" placeholder="شماره موبایل "/>
                <VarndarButton :onClick="signUp" title="ورود" classContainer="mt-4" />
            </div>

        </div>
    </div>

</template>
<script>
import VarndarButton from "../../components/Button/VarndarButton.vue"
import VarndarInput from "../../components/inputs/VandarInput.vue"
// import VarndarOtp from "../../components/inputs/VandarOtp.vue"
import LogoLayout from "./components/LogoLayout.vue"
import {CheckUserService} from "../../services/SignUpService"
import router from "@/routers"
export default {
    name: "SignUp",
    components: {
        LogoLayout,
        VarndarButton,
        VarndarInput,
        // VarndarOtp
    },
    data()
    {
        return {
            phone:""
        }
    },
    methods: {
        handleOnChange(event){
            this[event.target.name] = event.target.value
        },
        signUp(){
            router.push({ name: 'OtpPage', state: { phone: this.phone } })
            CheckUserService({
                mobile :this.phone
            }).then((res)=>{
                if(res.data.status === 1){
                    this.$router.push({name :"OtpPage",params: { phone: this.phone }, })
                        console.log(res) 
                }
            
            }).catch((e)=>console.log(e))
        }
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
</style>