import { useLocation } from "react-router-dom";
import React from 'react';


export function useQuery() {
    const { search } = useLocation(); // when logged: ?redirect=checkout
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
}