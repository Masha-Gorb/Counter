import React, {ChangeEvent, KeyboardEventHandler, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
export default {
    title: 'Todolist'
}

export const AddItemForm = () => {

    let [post, setPost] = useState('');

    const addPost = (post: string) => {
        console.log('add task button')
        setPost('')
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPost(e.currentTarget.value)
    }



    return (
        <div>
            <input
                value={post}
                onChange={onChangeHandler}
            />
            <button onClick={() => addPost(post)}>Add</button>
            <div>
                <span>{post}</span>
            </div>

        </div>
    )
}
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// export default {
//     title: 'AddItemForm',
//     component: AddItemForm,
//     // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
//     argTypes: {
//         backgroundColor: { control: 'color' },
//     },
// } as ComponentMeta<typeof AddItemForm>;

// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
//
// export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//     primary: true,
//     label: 'Button',
// };
//
// export const Secondary = Template.bind({});
// Secondary.args = {
//     label: 'Button',
// };
//
// export const Large = Template.bind({});
// Large.args = {
//     size: 'large',
//     label: 'Button',
// };
//
// export const Small = Template.bind({});
// Small.args = {
//     size: 'small',
//     label: 'Button',
// };
