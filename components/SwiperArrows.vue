<template>

            <div class="arrows">

                <span @click="isFirst ? $emit('last') : $emit('prev')">&lt;</span>
                <span  @click="isLast ? $emit('first') : $emit('next')">&gt;</span>
            </div>
</template>
<script>
export default {
    props:['isFirst','isLast']

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
