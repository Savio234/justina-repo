import React, { useState } from "react";
//import styled from "styled-components";

interface SearchProps {
  onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchQuery);
    setSearchQuery("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="search"
        value={searchQuery}
        onChange={handleChange}
      />
    </form>
  );
};

export default Search;
