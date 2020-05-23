import React, {useMemo} from 'react';
import {IApplication} from "../../interfaces";
import {useExpanded, useTable} from 'react-table'
import "./ApplicationsTable.css"

interface ApplicationsTableProps {
    applications: Array<IApplication>,
}

const columns = [
    {
        Header: 'icon',
        accessor: 'icon',
        Cell: ({cell}) => (<img alt={"icon-img"} className="icon-image" src={cell.value}/>)
    },
    {
        Header: 'Name',
        accessor: 'name',
    },
    {
        Header: 'Rating',
        accessor: 'rating',
    }, {
        Header: 'Category',
        accessor: 'category',
    }, {
        Header: 'Installed',
        accessor: 'install_count',
    }, {
        Header: 'Min age',
        accessor: 'min_age',
    },
]

export default function ApplicationsTable({applications}: ApplicationsTableProps) {
    const data = useMemo(() => applications, [applications]);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        visibleColumns,
    } = useTable(
        {
            Header: 'Main',
            columns,
            data,
        },
        useExpanded
    )

    const renderRowSubComponent = React.useCallback(({row}) => (<div dangerouslySetInnerHTML={{__html: row.original.description}}/>), [])

    return (
        <div>
            <table {...getTableProps()}>
                <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <React.Fragment {...row.getRowProps()} key={row.original.id}>
                            <tr {...row.getToggleRowExpandedProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                            {row.isExpanded ? (
                                <tr>
                                    <td colSpan={visibleColumns.length}>
                                        {renderRowSubComponent({row})}
                                    </td>
                                </tr>
                            ) : null}
                        </React.Fragment>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}
