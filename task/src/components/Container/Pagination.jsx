import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default class Paginat extends React.Component {
    render() {
        return (
            <Pagination aria-label="Page navigation example">
                <PaginationItem active>
                    <PaginationLink href="#">
                        ← Older
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        Newer →
                    </PaginationLink>
                </PaginationItem>
            </Pagination>
        );
    }
}