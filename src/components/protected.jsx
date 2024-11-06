import React, { useEffect, useState } from 'react';

const Protected = () => {
    const publicApiUrl = import.meta.env.PUBLIC_API_URL
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    const checkUser = async () => {
        const token = localStorage.getItem('token'); 
        console.log(token);
        try {
            const response = await fetch(`${publicApiUrl}users/admin`, {
                method: 'POST',
                headers: { Authorization: `Bearer ${token}` }
            });
            if (response.ok) {
                setIsAuthenticated(true);
                const userData = await response.json();
                setUser(userData);
            } else {
                setIsAuthenticated(false);
                window.location.href = '/admin/login';
            }
        } catch (err) {
            console.error(err);
            window.location.href = '/admin/login';

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

export default Protected;
