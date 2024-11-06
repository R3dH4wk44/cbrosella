import React, {useState,useEffect} from "react";
import { userDataDispatcher } from '../dispatchers/userDispatcher.js';



const UserHeaderDisplay = () => {
    const [userName, setUserName] = useState('');
    const fetchUserData = async () => {
        const response = await userDataDispatcher();
        if (response.ok) {
            setUserName(response.data.name);
        }
    }
    const isLoggedIn = () => {
        const cookies = document.cookie.split(';');
        console.log(cookies);
        for (let cookie of cookies) {
            cookie = cookie.trim();
            if (cookie.startsWith('token=')) {
                return true;  // Token is set
            }
        }
        return false;  // Token is not set
    };
    useEffect(() => {
        fetchUserData();
    })
    if (isLoggedIn()){
    return (
            <>
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"> Hola {userName}! <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg>
        </button>

        <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
            </li>
            </ul>
        </div>
        </>
    );
}else{
    return null;
}
}

export default UserHeaderDisplay;