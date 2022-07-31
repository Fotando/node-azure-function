type CustomState = {
  name: string
}

const customState: CustomState = {
  name: ""
}

customState.name = "custom state from common lib MODIFIED"

export { customState }