# Figment Solana RPC Endpoint

Figment template for a Solana RPC Endpoint CORS proxy.

This one can be run anywhere, I personally like to run it on
`Google Cloud Run`.

ENV VARS:
```
FIGMENT_TOKEN=YOUR_API_KEY
FIGMENT_URL=https://solana--mainnet.datahub.figment.io/
PORT=8080
```

[<img src="https://storage.googleapis.com/cloudrun/button.svg" alt="Run on Google Cloud" height="30">][run_button_solana_figment_rpc_proxy]

[run_button_solana_figment_rpc_proxy]: https://deploy.cloud.run/?git_repo=https://github.com/kevinrodriguez-io/solana-figment-rpc-endpoint-cors-gcr