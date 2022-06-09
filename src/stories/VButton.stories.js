import VButton from '@/components/VButton.vue';

export default {
  title: 'Button',
  component: VButton,
};

const Template = (args, { argTypes }) => ({
  components: { VButton },
  props: Object.keys(argTypes),
  template: '<VButton type="button" v-bind="$props">Button</VButton>',
});

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
};

export const Loading = Template.bind({});
Loading.args = {
  variant: 'primary',
  loading: true,
};

export const Large = Template.bind({});
Large.args = {
  variant: 'primary',
  large: true,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  variant: 'primary',
  fullWidth: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'primary',
  disabled: true,
};
