import React from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

const Search = (props) => {
    return (
        <div>
            <InputGroup>
                <Input placeholder="Search for..." />
                <InputGroupAddon addonType="append">
                    <Button color="secondary">Go!</Button>
                </InputGroupAddon>
            </InputGroup>
        </div>
    );
};

export default Search;