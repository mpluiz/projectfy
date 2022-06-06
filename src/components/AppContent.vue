<script>
import LeftAvatar from '@/assets/left_avatar.svg';
import RightAvatar from '@/assets/right_avatar.svg';

export default {
  name: 'AppContent',
  data() {
    return {
      leftAvatar: LeftAvatar,
      rightAvatar: RightAvatar,
    };
  },
};
</script>

<template>
  <div class="c-appcontent">
    <img class="c-avatar c-avatar--left" :src="leftAvatar" alt="avatar" />
    <img class="c-avatar c-avatar--right" :src="rightAvatar" alt="avatar" />
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.c-appcontent {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  background-image: url("@/assets/background.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right 0 top 0;
}

.c-avatar {
  position: absolute;

  &--left {
    left: 0;
  }

  &--right {
    right: 0;
  }
}
</style>
