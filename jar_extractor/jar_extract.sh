#!/bin/bash

for file in *.jar; do
    folder="${file%.jar}"
    mkdir -p "$folder"
    cd "$folder" || exit
    jar -xf "../$file"
    cd ..
done
