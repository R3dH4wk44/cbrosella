                const PUBLIC_API_URL = import.meta.env.PUBLIC_API_URL;

                const deleteCookie = (name) => {
                    setTimeout(() => {
                        console.log('eliminando cookie', name);
                        document.cookie = `${name}=; Max-Age=-99999999; path=/; domain=localhost;`;                                 },2000)
                    // Establece una fecha de expiración en el pasado para borrar la cookie
                };

                const fetchAdminLogin = async (loginData) => {
                    try {
                        const response = await fetch(`${PUBLIC_API_URL}users/login`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(loginData),
                            credentials: 'include', // Utiliza el mismo contexto de navegación y cookies para la solicitud  
                        });

                        const data = await response.json();
                        
                        if (response.ok) {
                            console.log(data); 
                            if(data.role === 'admin'){
                            return {ok: true, data: data};
                            }
                            const response = await fetch(`${PUBLIC_API_URL}users/logout`, {
                                method: 'POST',
                                credentials: 'include', // Utiliza el mismo contexto de navegación y cookies para la solicitud
                            });
                            return {ok: false, message: "No és una conta d'Administrador"};
                        } else {
                            return {ok: false, message: data.message};
                        }
                    } catch (e) {
                        return data.message;        
                    }
                };

                


                const userDataDispatcher = async () => {
                    try{


                        const response = await fetch(`${PUBLIC_API_URL}users/user`, {
                            credentials: 'include', // Utiliza el mismo contexto de navegación y cookies para la solicitud
                        });

                        const data = await response.json();
                        if(response.ok){
                            console.log(data);
                            return {ok: true, data: data};
                        }
                        return {ok: false, message: data.message};          
                    }catch(e){
                        return {
                            ok:false, message: "Error al veure al usuari",
                        }
                    }
                }

                export { fetchAdminLogin, userDataDispatcher    };