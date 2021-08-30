export interface AbstractConnectorArguments {
  supportedChainIds?: number[]
}

export interface ConnectorUpdate<T = number | string> {
  provider?: any
  chainId?: T
  networkId?: T
  account?: null | string
}

export enum ConnectorEvent {
  Update = 'Web3ReactUpdate',
  Error = 'Web3ReactError',
  Deactivate = 'Web3ReactDeactivate'
}
