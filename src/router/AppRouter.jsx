import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { LoginPage } from '../auth/';
import { CalendarPage } from '../calendar';
import { useAuthStore } from '../hooks';

export const AppRouter = () => {

    const { checkAuthToken, status } = useAuthStore();

    useEffect(() => {
        checkAuthToken();
    }, [])

    if (status === 'checking') {
        return <h1>Loading...</h1>  /* Loading */
    }

    console.log(status)

    return (
        <Routes>
            {
                (status === 'not-authenticated') ?
                    (
                        <>
                            <Route path='/auth/*' element={<LoginPage />} />
                            <Route path='/*' element={<Navigate to='/auth/login' />} />
                        </>
                    )
                    :
                    (
                        <>
                            <Route path='/' element={<CalendarPage />} />
                            <Route path='/*' element={<Navigate to='/' />} />
                        </>
                    )
            }



        </Routes>
    )
}
