<script>
export default {
    name: 'Header'
}
</script>

<template>
    <header>
        <div class="title">
            <div class="logo">
                <img src="../assets/img/ygoprodeck_logo.png" alt="logo">
            </div>
            <span>Yu-Gi-Oh Api</span>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {

    .title {
        display: flex;
        gap: 10px;
        align-items: center;
        height: 60px;
        padding: 0 40px;

        .logo {
            height: 25px;

            img {
                max-height: 100%;
            }
        }

        span {
            font-size: 30px;
        }
    }
}
</style>
