<script>
export default {
    name: 'CountButton',
    data() {
        return {
            count: 0
        }
    }
}
</script>

<template>
    <a-button @click="count++">Count is: {{ count }}</a-button>
</template>
