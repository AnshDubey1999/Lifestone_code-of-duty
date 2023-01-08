import React,{useState, useEffect} from "react";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";

const handleSearch = () => {
    
}
const Search = () => {
    return (
        <div>
            <Form>
            <FormGroup>
          <Input
            // type="email"
            // name="email"
            // id="exampleEmail"
            placeholder="Search"
            onChange={(e) => handleSearch(e)}
          /></FormGroup>
            </Form>
        </div>
    )
}

export default Search;