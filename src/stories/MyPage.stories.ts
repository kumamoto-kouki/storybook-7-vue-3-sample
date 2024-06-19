import MyPage from "../components/MyPage.vue";
import type { Meta, StoryObj } from "@storybook/vue3";


type Story = StoryObj<typeof MyPage>;

const meta: Meta<typeof MyPage> = {
  title: "MyPage",
  component: MyPage,
  render: () => ({
    components: { MyPage },
    template: "<MyPage />",
  }),
};

export const Default: Story = {};

// デフォルト設定を上書きしてモバイルレイアウトにする
export const ForMobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile",
    },
  },
};

export default meta;
