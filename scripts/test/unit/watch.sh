#!/bin/bash
echo "🕹 👓  Running application unit tests in whatch mode ..."
jest --watchAll --verbose --findRelatedTests --bail
