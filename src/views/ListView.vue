<script>
import TextField from '@/components/TextField.vue';
import SwitchButton from '@/components/SwitchButton.vue';
import AppTypography from '@/components/AppTypography.vue';

export default {
  components: { SwitchButton, TextField, AppTypography },
};
</script>

<template>
  <div class="list">
    <AppTypography>
      Home
    </AppTypography>
    <br/>
    <SwitchButton />
    <br/>
    <TextField label="Project Name *" />
    <TextField label="User(s) *" />
    <TextField label="Project Details" />
  </div>
</template>

<style scoped lang="scss">

.list {
  padding: 80px;
}
</style>
