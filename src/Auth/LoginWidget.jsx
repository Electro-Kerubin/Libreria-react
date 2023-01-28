import { Redirect } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react/bundles/types";
import { SpinnerLoading } from "../layouts/Utils/SpinnerLoading";
import OktaSignInWidget from "./OktaSignInWidget";

const LoginWidget = ({ config }) => {
    const { OktaAuth, authState } = useOktaAuth();
    const onSuccess = (tokens) => {
        OktaAuth.handleLoginRedirect(tokens);
    };

    const onError = (err) => {
        console.log('Error de autentificación: ', err)
    }

    if (!authState) {
        return (
            <SpinnerLoading />
        );
    }

    return authState.isAuthenticated ?
        <Redirect to={{ pathname: '/' }} />
        :
        <OktaSignInWidget config={config} onSuccess={onSuccess} onError={onError} />
}

export default LoginWidget;