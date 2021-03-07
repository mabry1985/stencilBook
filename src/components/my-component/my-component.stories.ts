export default {
  title: 'Example/Demo',
  component: 'my-component',
  argTypes: {
    firstName: {
      control: 'text',
      defaultValue: 'Stencil',
    },
    middleName: {
      control: 'text',
      defaultValue: 'Storybook',
    },
    lastName: {
      control: 'text',
      defaultValue: 'Starter',
    },
  },
};

export const MyComponent = ({ firstName, middleName, lastName }) => {
  return `<my-component first="${firstName}" middle="${middleName}" last="${lastName}"></my-component>`;
};
