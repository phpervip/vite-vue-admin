<template>
  <div></div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()

onBeforeMount(() => {
  const { params, query } = route
  const { pathMatch } = params
  router.replace({ path: '/' + pathMatch, query })
})
</script>
