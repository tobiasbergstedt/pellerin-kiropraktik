let apiUrl = ''

if (process.env.NODE_ENV === 'production') {
  apiUrl = 'https://www.kfa.nu'
} else {
  apiUrl = 'http://pellerin-kiropraktik.local'
}

export default apiUrl
