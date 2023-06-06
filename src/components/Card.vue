<script>
export default {
    name: 'Card'
}
</script>

<template>
    <div class="card">
        <div class="card-image">
            <img src="https://images.ygoprodeck.com/images/cards/34541863.jpg" alt="">
        </div>
        <div class="info">
            <h2>titolo carta </h2>
            <p>alien</p>
        </div>
    </div>

    <div class="card">
        <div class="card-image">
            <img src="https://images.ygoprodeck.com/images/cards/34541863.jpg" alt="">
        </div>
        <div class="info">
            <h2>titolo carta </h2>
            <p>alien</p>
        </div>
    </div>

    <div class="card">
        <div class="card-image">
            <img src="https://images.ygoprodeck.com/images/cards/34541863.jpg" alt="">
        </div>
        <div class="info">
            <h2>titolo carta </h2>
            <p>alien</p>
        </div>
    </div>

    <div class="card">
        <div class="card-image">
            <img src="https://images.ygoprodeck.com/images/cards/34541863.jpg" alt="">
        </div>
        <div class="info">
            <h2>titolo carta </h2>
            <p>alien</p>
        </div>
    </div>

    <div class="card">
        <div class="card-image">
            <img src="https://images.ygoprodeck.com/images/cards/34541863.jpg" alt="">
        </div>
        <div class="info">
            <h2>titolo carta </h2>
            <p>alien</p>
        </div>
    </div>

    <div class="card">
        <div class="card-image">
            <img src="https://images.ygoprodeck.com/images/cards/34541863.jpg" alt="">
        </div>
        <div class="info">
            <h2>titolo carta </h2>
            <p>alien</p>
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