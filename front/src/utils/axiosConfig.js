import axios from 'axios';

// Configurar Axios para enviar cookies con cada solicitud
axios.defaults.withCredentials = true;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Obtener y configurar el token CSRF

const setAxiosDefaults = async () => {
  try {
    await axios.get('http://127.0.0.1:8000/api/csrf-token');
  } catch (error) {
    console.error('Error fetching CSRF token:', error);
  }
};

export { setAxiosDefaults };
export default axios;