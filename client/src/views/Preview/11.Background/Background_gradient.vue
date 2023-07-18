<template>
    <div class="bg_gradient"></div>
</template>
<style scoped>
.bg_gradient {
    display: block;
    width: 100%;
    height: 100%;
	background: linear-gradient(180deg, var(--background-color), var(--background-gradient));
	background-size: 150% 150%;
	animation: gradient 10s ease infinite;
}
@keyframes gradient {
	0% {
		background-position: 0% 0%;
	}
	50% {
		background-position: 0% 50%;
	}
	100% {
		background-position: 0% 0%;
	}
}

</style>