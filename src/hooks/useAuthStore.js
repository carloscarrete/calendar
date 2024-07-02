import { useDispatch, useSelector } from "react-redux"
import calenadrApi from "../api/calendarApi";
import { clearErrorMessage, onChecking, onLogin, onLogout, onLogoutCalendar } from "../store";

export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async ({ email, password }) => {
        dispatch(onChecking());
        try {
            const { data } = await calenadrApi.post('/auth', { email, password });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({
                name: data.name,
                uid: data.uid
            }))
        } catch (error) {
            dispatch(onLogout('Credenciales incorrectas'));
            setTimeout(() => {
                dispatch(clearErrorMessage())
            }, 3000)
        }
    }

    const startRegister = async ({ email, password, name }) => {
        dispatch(onChecking());
        try {
            const { data } = await calenadrApi.post('/auth/new', {
                email, password, name
            })

            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({
                name: data.name,
                uid: data.uid
            }))

        } catch (error) {
            dispatch(onLogout(error.response.data?.message || 'Error al registrar'))
        }
    }

    const checkAuthToken = async() => {
        const token = localStorage.getItem('token');
        if (!token) return dispatch(onLogout());

        try{
            const {data} = await calenadrApi.get('auth/renew');
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({
                name: data.name,
                uid: data.uid
            }))
        }catch(error){
            localStorage.removeItem('token');
            localStorage.removeItem('token-init-date');
            dispatch(onLogout());
        }
    }

    const startLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('token-init-date');
        dispatch(onLogoutCalendar())
        dispatch(onLogout());
    }

    return {
        status,
        user,
        errorMessage,

        startLogin,
        startRegister,
        checkAuthToken,
        startLogout

    }
}
