<template>

            <div class="arrows">

                <span @click="isFirst ? $emit('last') : $emit('prev')">&lt;</span>
                <span  @click="isLast ? $emit('first') : $emit('next')">&gt;</span>
            </div>
</template>
<script>
export default {
    props:['isFirst','isLast'],
    mounted(){
        setInterval(()=>{
            if(this.isLast) 
               this.$emit('first');
            else 
                this.$emit('next');
        },2000);
    }

}
</script>
<style lang="sass" scoped>
.arrows *
    font-weight: 100
    cursor: pointer
    font-size: 1.6rem
    color: rgb(125, 125, 125)
    padding: 0.2rem


</style>
