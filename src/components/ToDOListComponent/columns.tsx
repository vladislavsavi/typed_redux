import React from "react";
import {Space, Button} from 'antd';

export const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Descriptions',
        dataIndex: 'text',
        key: 'info',
    },
    {
        title: 'Actions',
        key: 'actions',
        render: (_text: any, _record: any) => (
            <Space size="middle">
                <Button style={{padding: 0}} type='link'>Delete</Button>
            </Space>
        ),
    }
];
