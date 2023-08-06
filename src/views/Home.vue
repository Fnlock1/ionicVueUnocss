<template>
    <div class="w-full h-full  bg-white">


        <div class="flex justify-between">
            <div class="text-black ml-3 pt-3">
                <div class="D-DINExp-Bold text-2xl text-gray">{{ checkTimeReturnMsg() }}</div>
                <div class="D-DINExp-Bold text-xl mt-1">{{ getUserName() }}</div>
            </div>

            <div class="w-12 h-12 mr-6 mt-5">
                <img
                        class="w-full h-full rounded-full"
                        src="https://img0.baidu.com/it/u=1691000662,1326044609&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1690563600&t=f794467628fa93e9f54ad543e6cf33ee"
                        alt="">
            </div>
        </div>

        <!--    这是盒子 -->
        <div class="MoneyCard ion-activatable ripple-parent rectangle w-95% mx-auto rounded-xl mt-12 shadow-2xl hover:scale-2xl">
            <ion-ripple-effect>


            </ion-ripple-effect>

            <div class="flex justify-around   items-center pt-5">
                <div class="D-DINExp-Bold -left-3 relative">Your balance</div>
                <div class="D-DINExp-Bold ClickCard text-xs  p-2 w-16 rounded-full">Click Me</div>
            </div>

            <!--        这是钱-->
            <div class="D-DINExp-Bold pb-5 flex items-center ml-5 mt-5">
                <span class="text-2xl">￥</span>
                <span class="text-2xl">1200 / </span>
                <span class="text-gray ml-1 mt-1">5300</span>
            </div>
            <ion-range disabled value="1200" max="5300" class="w-52 ml-1/8">
            </ion-range>
        </div>


        <div class="D-DINExp-Bold text-xl ml-3 mt-12 text-black">My Operation</div>

        <!--        这是操作区-->
        <div class="w-2.8/3  flex bg-transparent
                    overscroll-x-auto p-1 flex-wrap justify-around
         rounded-xl  mt-4 mx-auto">
            <div
                    v-for="(item,index) in 4"
                    class="w-1/3 shadow-2xl mt-2 mr-2
                        flex justify-center items-center flex-col
                        h-42 rounded-xl bg-white">
                <Icon color="black" size="72">
                    <CalligraphyPen24Regular></CalligraphyPen24Regular>
                </Icon>

                <p class="text-black D-DINExp-Bold">record</p>
            </div>
        </div>

    </div>


</template>

<script setup lang="ts">
import {checkTimeReturnMsg, getUserName} from '../utils/index.js'
import {CalligraphyPen24Regular} from '@vicons/fluent'
import {Icon} from '@vicons/utils'
</script>

<style scoped>
.MoneyCard {
    background-color: #3b74ee;

}

.ClickCard {
    background-color: rgba(59, 53, 53, 0.7);
}

ion-range {
    --bar-background: #a2d2ff;
    --bar-background-active: #bde0fe;
    --bar-height: 8px;
    --bar-border-radius: 8px;
    --knob-size: 12px;
    --pin-color: #fff;
}

</style>
