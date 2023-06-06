<script>
export default {
    name: 'Card',
    props: {
        details: Object
    }
}
</script>

<template>
    <div class="card">
        <div class="card-image">
            <img :src="details.card_images[0].image_url" alt="">
        </div>
        <div class="info">
            <h2>{{ details.name }}</h2>
            <p>{{ details.archetype }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    width: calc(100% / 5 - 20px);
    margin: 0 0 20px;
    background-color: #d48f38;

    img {
        max-width: 100%;
    }

    .info {
        text-align: center;

        h2 {
            color: white;
            margin: 20px 0;
        }

        p {
            font-size: 24px;
            padding-bottom: 10px;
        }
    }
}
</style>