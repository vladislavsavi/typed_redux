import * as React from "react";
import {LayoutComponent} from "./components";

import {ToDOListComponent} from "./components/ToDOListComponent/ToDOListComponent";


export const App: React.FunctionComponent<{}> = () => {
    return(
        <LayoutComponent>
            <ToDOListComponent/>
        </LayoutComponent>
    )
}