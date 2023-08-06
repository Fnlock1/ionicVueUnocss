<template>


    <router-view></router-view>


    <div class="w-screen fixed
                flex justify-around items-center h-12 bg-white bottom-0">

        <div>
            <icon size="26" color="#000000">
                <Home12Filled></Home12Filled>
            </icon>
        </div>

        <div>
            <icon size="26" color="#000000">
                <Card></Card>
            </icon>
        </div>


        <div>
            <icon size="26" color="#000000">
                <TachometerAlt></TachometerAlt>
            </icon>
        </div>


        <div>
            <icon size="26" color="#000000">
                <User></User>
            </icon>
        </div>

    </div>
</template>

<script lang="ts" setup>
import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/vue';

import { playCircle, radio, library, search } from 'ionicons/icons';
import {Home12Filled} from '@vicons/fluent'
import {Card} from '@vicons/ionicons5'
import {User} from '@vicons/tabler'
import {TachometerAlt} from '@vicons/fa'
import { Icon } from '@vicons/utils'

</script>


<style scoped>
ion-label{
    color: white;
    font-size: 12px;
}
</style>
