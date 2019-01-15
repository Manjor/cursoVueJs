<template>
    <div id="app">
        <h1>Olá Vue!</h1>
    </div>
</template>

<script>
export default {

}
</script>

<style>
@font-face {
    font-family: "RobotoRegular";
    src: url("./fonts/Roboto-Regular.ttf")
}
* {
    font-family: "RobotoRegular",monospace;
}

body{
    margin: 0;
}
#app {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;

    color: white;
    background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
}

</style>
