const apiFetch = <T>(url: string, options?: any): Promise<T> =>
  fetch(`${url}`, options)
    .then((res) => {
      if (!res.ok) {
        throw new Error();
      }
      return res.json();
    })
    .catch((err) => console.log(err));

export const get = <T = any>(url: string, headers?: any) => {
  return apiFetch<T>(url, {
    method: 'GET',
    body: null,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  });
};

export const deleted = <T = any>(url: string, headers?: any) => {
  return apiFetch<T>(url, {
    method: 'DELETE',
    body: null,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  });
};

export const post = <T = any>(url: string, body: any, headers?: any) => {
  return apiFetch<T>(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  });
};

export const put = <T = any>(url: string, body: any) => {
  return apiFetch<T>(url, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
