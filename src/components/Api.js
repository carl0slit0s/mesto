class Api {
  constructor(server, options) {
    this.options = options;
    this.server = server;
  }

  getProfileData() {
    return fetch(`${this.server}/users/me`, this.options)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }

  getCards() {
    return fetch(`${this.server}/cards`, this.options)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }

  editProfile(data) {
    return fetch(`${this.server}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: 'b14b5010-4fa1-4827-8329-0c3d4de2a70b',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }

  addCard(name, link) {
    return fetch(`${this.server}/cards`, {
      method: 'POST',
      headers: {
        authorization: 'b14b5010-4fa1-4827-8329-0c3d4de2a70b',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        link,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }

  deleteCard(id) {
    return fetch(`${this.server}/cards/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: 'b14b5010-4fa1-4827-8329-0c3d4de2a70b',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }
}

export const api = new Api('https://nomoreparties.co/v1/cohort-39', {
  headers: {
    authorization: 'b14b5010-4fa1-4827-8329-0c3d4de2a70b',
  },
});
