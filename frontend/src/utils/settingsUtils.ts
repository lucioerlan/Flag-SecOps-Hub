const restoreSettings = () => {
  let settings = null
  const storedData = localStorage.getItem('localSettings')

  if (storedData) {
    settings = JSON.parse(storedData)
  }

  return settings
}

const storeSettings = (settings: object) => {
  localStorage.setItem('localSettings', JSON.stringify(settings))
}

export { restoreSettings, storeSettings }
