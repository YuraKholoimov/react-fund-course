import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { AuthContext } from "../Context";
import { privateRoutes, publicRoutes } from "../Route/route";

const AppRouter = () => {
    const {isAuth, isLoading} = React.useContext(AuthContext)

    if (isLoading) {
        return <div>Loading...</div>
    }
    return ( 
        isAuth
        ? <Switch>
            {privateRoutes.map((r, index)=> 
            <Route 
                key={index} 
                path={r.path} 
                component={r.component} 
                exect={r.exect} />
            )}
            <Redirect to='/tasks' />
        </Switch>
        : 
        <Switch>
            {publicRoutes.map((r, index)=> 
                <Route 
                key={index} 
                path={r.path} 
                component={r.component} 
                exect={r.exect} />
            )}
            <Redirect to='/login' />
        </Switch>
    );
}
 
export default AppRouter;