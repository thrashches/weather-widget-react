import React from "react";

interface SearchItemProps {
  name: string;
  local_names: {
    ru?: string;
  };
}

const SearchItem = (props: SearchItemProps) => (
  <li>{props.name}</li>
);

export { type SearchItemProps, SearchItem };
