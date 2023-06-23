import { apiLogin } from '../API_URL/autenticacao';

describe('apiLogin', () => {
  it('deve fazer login com sucesso e retornar os dados', async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      status: 200,
      json: jest.fn().mockResolvedValueOnce({
        accessToken: 'mockToken',
        user: {
          id: 'mockUserId',
        },
      }),
    });

    const localStorageMock = {
      setItem: jest.fn(),
    };
    Object.defineProperty(window, 'localStorage', { value: localStorageMock });

    const email = 'teste@linda.com';
    const password = 'password';
    const id = 'mockId';
    const data = await apiLogin(email, password, id);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('https://burger-queen-api-mock-mu.vercel.app/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, id }),
    });

    expect(localStorageMock.setItem).toHaveBeenCalledTimes(2);
    expect(localStorageMock.setItem).toHaveBeenCalledWith('authToken', 'mockToken');
    expect(localStorageMock.setItem).toHaveBeenCalledWith('userId', 'mockUserId');

    expect(data).toEqual({
      accessToken: 'mockToken',
      user: {
        id: 'mockUserId',
      },
    });
  });

  it('deve lançar um erro quando as credenciais estiverem incorretas', async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      status: 400,
    });

    const email = 'teste@linda.com';
    const password = 'wrongpassword';
    const id = 'mockId';

    // Assertions
    await expect(apiLogin(email, password, id)).rejects.toThrow('Confira suas credenciais');
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
