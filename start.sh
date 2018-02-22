#!/bin/bash

npm run styleguide &
npm run theo:onchange &
npm run theo &
npm run dev &

wait
