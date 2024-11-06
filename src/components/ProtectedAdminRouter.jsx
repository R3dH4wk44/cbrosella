import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedAdminRoute = () => {
    const navigate = useNavigate();
    const publicApiUrl = import.meta.env.PUBLIC_API_URL
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    const checkUser = async () => {
        const token = localStorage.getItem('token'); 
        try {
            const response = await fetch(`${publicApiUrl}users/admin`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            if (response.ok) {
                setIsAuthenticated(true);
                const userData = await response.json();
                setUser(userData);
            } else {
                setIsAuthenticated(false);
                navigate('/admin/login');
            }
        } catch (err) {
            console.error(err);
            setIsAuthenticated(false);
        }
    };

    useEffect(() => {
        checkUser();
    }, []);
    
    return (
        <div>
            {isAuthenticated ? (
                <div>Welcome, {user?.name}!</div> // Muestra un mensaje si está autenticado
            ) : (
                <div>Not authorized. Please log in.</div> // Mensaje si no está autenticado
            )}
        </div>
    );
};

export default ProtectedAdminRoute;
