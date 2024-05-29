let apiUrl = ''

if (process.env.NODE_ENV === 'production') {
  // apiUrl = 'https://www.kfa.nu'
  apiUrl = 'https://www.tobiasbergstedt.se/pellerin/cms'
} else {
  apiUrl = 'http://pellerin-kiropraktik.local'
}

export default apiUrl
