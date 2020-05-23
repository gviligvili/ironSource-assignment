import React from 'react';
import {IApplication} from "../../interfaces";
import {Table, Thead, Tbody, Tr, Th, Td} from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import "./ApplicationsTable.css"

interface ApplicationsTableProps {
    applications: Array<IApplication>,
}

export default function ApplicationsTable({applications}: ApplicationsTableProps) {
    return (
        <Table>
            <Thead>
                <Tr>
                    <Th></Th>
                    <Th>Name</Th>
                    <Th>Rating</Th>
                    <Th>Category</Th>
                    <Th>Installed</Th>
                    <Th>Min age</Th>
                </Tr>
            </Thead>
            <Tbody className="table-body">
                {
                    applications.map((t, index) =>
                        (<Tr key={t.id}>
                            <Td>{index + 1}</Td>
                            <Td>{t.name}</Td>
                            <Td>{t.rating}</Td>
                            <Td>{t.category}</Td>
                            <Td>{t.install_count}</Td>
                            <Td>{t.min_age}</Td>
                        </Tr>))
                }
            </Tbody>
        </Table>
    )
}
