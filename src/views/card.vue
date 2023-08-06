<template>
    <ion-content class="w-full h-full bg-white">
        <div class="w-full h-full bg-white">
            <!--    -->

            <div class="w-full" style="background-color: #1D1E25">
                <div class="flex w-full items-end justify-between p-2 pt-5">
                    <div class="D-DINExp-Bold text-2xl">History</div>
                    <Icon size="24">
                        <Alert24Regular></Alert24Regular>
                    </Icon>
                </div>

                <!--        -->
                <div class="w-2.7/3 h-12 bg-white rounded mx-auto mt-6">

                </div>

                <div class="flex justify-around mt-5 pb-4">
                    <div class="w-1/4 h-8 bg-white rounded"></div>
                    <div class="w-1/4 h-8 bg-white rounded"></div>
                    <div class="w-1/4 h-8 bg-white rounded"></div>
                </div>
            </div>

            <div class="">
                <!--        标题-->
                <div
                    style="color:#737580;background-color: #F7F7F7"
                    class="text-gray w-full p-4 D-DINExp">July,1 2022</div>

                <!--        内容-->
                <div class="w-full flex items-center bg-white    p-3"
                     v-for="(item,index) in 12"
                     :key="index"
                     style="border-bottom: 1px solid #F2F2F2"
                >
                    <img
                        class="w-12 h-12 object-cover rounded-full"
                        src="https://img0.baidu.com/it/u=3263792471,4250405212&fm=253&fmt=auto&app=138&f=JPEG?w=941&h=500" alt="">

                    <div class="ml-4">
                        <div class="D-DINExp-Bold text-black text-4 mosha">恋爱中的犀牛</div>
                        <div style="color: #808D9E" class="text-2 mt-1 D-DINExp">2:20PM  .  Jun 22, 2022</div>
                    </div>
                    <!--            付费-->
                    <div class="text-black D-DINExp-Bold ml-32">
                        12.00
                    </div>
                </div>
            </div>
        </div>

    </ion-content>
</template>

<script setup>
import {Alert24Regular} from '@vicons/fluent'
import {Icon} from '@vicons/utils'
</script>

<style scoped>

</style>
