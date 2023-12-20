<template>
    <div class="container">
        <div class="row">
            <p class="lead">
                Muttaqeen's Portfolio &copy;
                <span>{{ currYear }}</span>
            </p>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'FooterComp',
        data(){
            return{
                currYear: new Date().getFullYear()
            }
        }
    }
</script>

<style scoped>

</style>