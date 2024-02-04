<template>
    <div class="container">
        <div class="row">
            <div class="col-md-7">
                <h2>{{ kyoryu.title }}</h2>
                <img src="images/ティラノサウルスいらすとや.png" alt="ティラノサウルス" style="width: 700px; height: auto;">
            </div>
            <div class="col-md-5">
                <h3>{{ kyoryu.explanation }}</h3>
                <div v-for=" ty in kyoryu.info">
                    <p>{{ ty.text }}</p>
                </div>
                <h3>{{ kyoryu.feature }}</h3>
                <div v-for=" ty2 in kyoryu.features">
                    <p>{{ ty2.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
 
<script setup lang="ts">
const kyoryu = useKyoryu()
</script>