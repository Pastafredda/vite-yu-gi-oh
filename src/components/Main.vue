<script>
import ListCards from './ListCards.vue'

export default {
    name: 'Main',
    components: {
        ListCards
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="container-cards">
                <div class="found">
                    <h4>Found 20 cards</h4>
                </div>
                <div class="listcard">
                    <ListCards />
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    height: calc(100% - 60px);
    background-color: #d48f38;
    padding-top: 100px;
    padding-bottom: 100px;

    .container {
        width: 80%;
        height: 100%;
        margin: 0 auto;
        background-color: white;
        padding: 50px 50px 20px 50px;

        .container-cards {
            height: 100%;
            width: 100%;


            .found {
                background-color: #212529;
                color: white;
                padding: 20px;
            }

            .listcard {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
            }
        }

    }
}
</style>
