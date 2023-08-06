<template>
 <div class="w-full min-h-full bg-white" style="transition: all .2s ease-in-out">
   <div class="flex items-center justify-between p-2 pt-5">
    <img class="w-12 h-12 object-cover  rounded-full" src="https://img0.baidu.com/it/u=1993557595,4075530522&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1690822800&t=03d400b588b4ac204dd3836013e4abd1"
         alt="">

       <Icon size="24"  color="black">
           <Alert24Regular></Alert24Regular>
       </Icon>
   </div>


     <!--  计划卡片-->

     <div class="w-2.52/3 rounded-2  shadow-2xl p-2  mt-12 bg-no-repeat bg-center bg-cover ml-2 bg-green-400"
     >
        <div class="youshe flex justify-between p-2  text-4">
            <div>旅游 Plane</div>
            <div>
                <div>Money</div>
                <div class="text-xs text-center">10000</div>
            </div>
        </div>
         <img src="public/image/Chip.png" class="ml-3" alt="">


<!--         卡片Id-->
         <div class="mosha mt-4 font-light  font-bold flex justify-around">
             <span>1111</span>
             <span>1111</span>
             <span>1111</span>
             <span>1111</span>
         </div>

         <div class="flex justify-between p-3 items-end">
             <div class="D-DINExp p-2 rounded-xl active:scale-1.2 transition" style="background-color: rgba(0,0,0,.5)">More</div>
             <icon size="18">
                 <Settings32Filled></Settings32Filled>
             </icon>
         </div>
     </div>

      <!--  添加卡片-->
      <div class="w-10  h-45 flex justify-center items-center right-1 top-31 rounded-3"
           style="background-color: #0d0d0d;position:absolute;">
          <icon>
              <Add12Filled></Add12Filled>
          </icon>
      </div>


 </div>
</template>

<script setup>

import {Alert24Regular,Add12Filled,Settings32Filled} from "@vicons/fluent";
import {Icon} from "@vicons/utils";

</script>

<style scoped>

</style>
