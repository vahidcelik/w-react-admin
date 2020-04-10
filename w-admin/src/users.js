import React from 'react';
import { List, Datagrid, TextField, EmailField, UrlField } from 'react-admin';
import MyUrlField from './MyUrlField';


export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="phone" />
            <UrlField source="website" target="_blank" />
            <MyUrlField source="website" target="_blank" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
);