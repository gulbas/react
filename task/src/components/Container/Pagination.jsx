import React, {Component} from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default class Paginat extends Component {
    render() {
        return (
            <Pagination aria-label="Page navigation example">
                <PaginationItem active>
                    <PaginationLink href="#">
                        ← Olderd
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