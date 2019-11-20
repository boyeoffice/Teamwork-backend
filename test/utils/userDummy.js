const login = {
	validDetails: {
		email: 'admin@example.com',
		password: '123456'
	},
	invalidEmail: {
      email: 'april@example.com',
      password: '123456'
  },
  invalidPassword: {
      email: 'admin@example.com',
      password: 'fool'
  }
}

const createUser = {
  emptyData: {
    firstname: '',
    lastname: ''
  },
  validDetails: {
    firstname: 'Olakunle',
    lastname: 'Boye'
  }
}

module.exports = {
	login,
  createUser
}