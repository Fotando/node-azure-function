type CustomState = {
  name: string
}

const customState: CustomState = {
  name: ""
}

customState.name = "custom state from common lib MODIFIED AND SHOW  MESSAGE FROM CI!!! DEMO."

export { customState }