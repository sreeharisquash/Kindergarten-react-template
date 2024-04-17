import React from "react";

import InnerPages from "../innerPages/InnerPages";
import Home from "../homemodule/Home";

const BaseLayout = () => {
    return(
        <>
       <Home/>
        <InnerPages/>
        </>
    )
}
export default BaseLayout;