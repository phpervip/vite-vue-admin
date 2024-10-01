<template>
<el-button type="primary" @click="openDialog">Open Dialog</el-button>
<el-dialog
  title="Dialog Title"
  v-model="visible"
  width="30%"
>
  <span>{{ msg }}</span>
  <template #footer>
    <span class="dialog-footer">
      <el-button @click="closeDialog">Cancel</el-button>
      <el-button type="primary" @click="closeDialog">Confirm</el-button>
    </span>
  </template>
</el-dialog>
</template>
<script setup>
defineProps({
  msg: String,
})
const visible = ref(false)
const openDialog = () => { 
  ElMessageBox.alert('dialog content', 'dialog title')
  visible.value = true
}
const closeDialog = () => { 
  ElMessage.success('操作成功')
  visible.value = false
}
</script>
