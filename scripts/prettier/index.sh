#!/bin/bash
set -e
echo "💅  Pretting Everything (packages & applications) ..."
prettier --config ./.prettierrc --write './src/**/*.ts{,x}'
