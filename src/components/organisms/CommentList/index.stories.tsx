import type { Meta, StoryObj } from '@storybook/react'
import { CommentList } from '.'

const meta = {
  title: 'Component/CommentList',
  component: CommentList,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CommentList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  argTypes: {
    comments: {
      control: 'object',
    },
  },
  args: {
    comments: [
      {
        _id: '1',
        isValidUser: true,
        author: {
          email: '12345@naver.com',
          name: '효중',
          _id: '1',
          fullName: '효중킴',
        },
        comment: '아아아아아',
      },
      {
        _id: '1',
        isValidUser: false,
        author: {
          fullName: '김효중',
          image: '',
          email: '12345@naver.com',
          name: '효중',
          _id: '1',
        },
        comment: '아아아아아아아아',
      },
      {
        _id: '2',
        isValidUser: true,
        author: {
          email: '12345@naver.com',
          name: '효중',
          _id: '1',
          image: 'https://picsum.photos/200/200',
          fullName:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        },
        comment: '',
      },
      {
        _id: '3',
        isValidUser: false,
        author: {
          email: '12345@naver.com',
          name: '효중',
          _id: '1',
          image: 'https://picsum.photos/200/200',
          fullName: '사용자',
        },
        comment:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
      {
        _id: '4',
        isValidUser: true,
        author: {
          email: '12345@naver.com',
          name: '효중',
          _id: '1',
          image: 'https://picsum.photos/200/200',
          fullName: '사용자 명 긴 경우~~~~~~~~~~',
        },
        comment: `
          Where does it come from?
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.
      
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
      
          Where can I get some?
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
        `,
      },
    ],
  },
}