import React from 'react';

import {Table, Button} from 'antd';
import {useDispatch, useSelector} from "react-redux";

import {markAsCompleted, add_todo} from "../../redux_store/todoList/actions";
import {RootState} from "../../redux_store";

import {columns} from './columns';

export const ToDOListComponent: React.FunctionComponent<{}> = () => {
    const todoList = useSelector((store: RootState) => store.todoList);
    const dispatch = useDispatch();

    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[]) => dispatch(markAsCompleted(selectedRowKeys))
    };

    return(
        <>
            <Button
                type="primary"
                onClick={() => dispatch(add_todo({id: todoList.length, completed: false, text: 'todo text'}))}
            >
                Add test record
            </Button>
            <Table
                rowKey='id'
                columns={columns}
                rowSelection={rowSelection}
                dataSource={todoList}
                pagination={{pageSize: 10}}
            />
        </>
    );
}
