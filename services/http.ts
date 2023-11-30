export const BASE_URL = "http://127.0.0.1:8000/";
let accessToken: string | null = null;
let refreshToken: string | null = null;

const setAccessToken = (token: string) => {
  accessToken = token;
};

const setRefreshToken = (token: string) => {
  refreshToken = token;
};

const generateHeaders = (includeAuth: boolean = true): HeadersInit => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (includeAuth && accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  } else if (includeAuth) {
    throw new Error('Access token could not be retrieved, please try again');
  }

  return headers;
};

export const getAuthToken = async (
  username: string,
  password: string
): Promise<string> => {
  try {
    const response = await fetch(`${BASE_URL}api/token/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
      credentials: 'include',
      redirect: 'follow',
    });

    if (!response.ok) {
      throw new Error(`Authentication failed: ${response.statusText}`);
    }

    const result = await response.json();
    console.log("resuuulllllltttt", result);
    setAccessToken(result.access);

    return result.access;
  } catch (error) {
    throw error;
  }
};

export const refreshAuthToken = async (): Promise<string> => {
  try {
    const refreshToken = localStorage.getItem('refresh_token');
    const response = await fetch(`${BASE_URL}/api/token/refresh/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refresh: refreshToken }),
    });

    if (!response.ok) {
      throw new Error(`Token refresh failed: ${response.statusText}`);
    }

    const result = await response.json();
    setAccessToken(result.access);
    return result.access;
  } catch (error) {
    throw error;
  }
};

export const clearAuthToken = (): void => {
  setAccessToken('');
  localStorage.removeItem('refresh_token');
};

export const apiService = {
  async get<T>(endpoint: string, includeAuth: boolean = true): Promise<T> {
    const headers = generateHeaders(includeAuth);
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      headers,
    });
    return response.json();
  },

  async post<T>(endpoint: string, data: any, includeAuth: boolean = true): Promise<T> {
    const headers = generateHeaders(includeAuth);
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    });
    return response.json();
  },

  async put<T>(endpoint: string, data: any, includeAuth: boolean = true): Promise<T> {
    const headers = generateHeaders(includeAuth);
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "PUT",
      headers,
      body: JSON.stringify(data),
    });
    return response.json();
  },

  async delete<T>(endpoint: string, includeAuth: boolean = true): Promise<T> {
    const headers = generateHeaders(includeAuth);
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "DELETE",
      headers,
    });
    return response.json();
  },

  getAuthToken,
};
