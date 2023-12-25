const VisitorTime = (user: string) => {
  const time = new Date().getHours()

  const name = !user ? 'visitante' : user.substring(0, user.lastIndexOf('@'))

  if (time < 13) {
    return `Bom dia ${name} 🌅`
  } else if (time < 18) {
    return `Boa tarde ${name} ☀️`
  }

  return `Boa noite ${name} 🌙`
}

export default VisitorTime
