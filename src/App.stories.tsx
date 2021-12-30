import React from 'react';
import { AddItemForm } from './myStories/AddItemForm.stories';
import { Todolist } from './Todolist.stories';

export default {
    title: 'wtf'
}

const App = () => {
    return (
        <div>
            <Todolist/>
            <AddItemForm/>
        </div>
    )
}