import VTypography from '@/components/VTypography.vue';

export default {
  title: 'Typography',
  component: VTypography,
};

const Template = (args, { argTypes }) => ({
  components: { VTypography },
  props: Object.keys(argTypes),
  template: '<VTypography v-bind="$props">Lorem ipsum dolor sit amet</VTypography>',
});

export const Title = Template.bind({});
Title.args = {
  variant: 'title',
};

export const Body = Template.bind({});
Body.args = {
  variant: 'body',
};

export const BodySmall = Template.bind({});
BodySmall.args = {
  variant: 'body-small',
};

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};

export const Bright = Template.bind({});
Bright.args = {
  color: 'bright',
};

export const Dark = Template.bind({});
Dark.args = {
  color: 'dark',
};
