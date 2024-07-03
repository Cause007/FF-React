import { useEffect, useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

interface AuthCheckerProps {
    children: React.ReactNode;
}

const AuthChecker = ({ children }: AuthCheckerProps) => {
    const navigate = useNavigate();
    const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

        useEffect(() => {
            if (!isLoading && !isAuthenticated) {
                loginWithRedirect();
            }
        }, [isLoading, isAuthenticated, loginWithRedirect]);

        useEffect(() => {
            if (!isLoading && isAuthenticated) {
                navigate('/Directory');
            }
        }, [isLoading, isAuthenticated, navigate]);

        return (
            <>{children}</>
        );
    };

export default AuthChecker;
