#!/bin/bash

# Set environment variables
export CUDA_VERSION=cpu
export GHC_VERSION=9.2.5
export CABAL_VERSION=3.8.1.0
export LIBTORCH_VERSION=1.11.0

# Install necessary Ubuntu packages
apt-get update -qq
apt -y --allow-downgrades --allow-remove-essential --allow-change-held-packages \
    install locales software-properties-common apt-transport-https wget
add-apt-repository -y ppa:canonical-kernel-team/ppa
apt-get update -qq
DEBIAN_FRONTEND=noninteractive apt install -y  -o Dpkg::Options::="--force-confdef" -o Dpkg::Options::="--force-confold" \
    libcairo2-dev libpango1.0-dev libblas-dev liblapack-dev gcc g++ git \
    emacs-nox vim strace curl unzip sudo
wget -q https://github.com/hasktorch/libtorch-binary-for-ci/releases/download/$LIBTORCH_VERSION/libtorch_$LIBTORCH_VERSION+${CUDA_VERSION}-1_amd64.deb
DEBIAN_FRONTEND=noninteractive apt install -y  -o Dpkg::Options::="--force-confdef" -o Dpkg::Options::="--force-confold" \
    ./libtorch_$LIBTORCH_VERSION+${CUDA_VERSION}-1_amd64.deb
rm libtorch_$LIBTORCH_VERSION+${CUDA_VERSION}-1_amd64.deb
rm -rf /var/lib/apt/lists/*

# Clone Hasktorch and Inline-C repositories
git clone https://github.com/hasktorch/hasktorch.git hasktorch
git clone https://github.com/fpco/inline-c.git inline-c

# Checkout specific versions of Hasktorch and Inline-C code
cd hasktorch && git checkout a31ef707927cd70ea9283e3b10f2270ef3e2935a && cd ..
cd inline-c && git checkout 2d0fe9b2f0aa0e1aefc7bfed95a501e59486afb0 && cd ..

# Download Cabal configuration file and install Hasktorch and Inline-C packages
curl https://www.stackage.org/nightly-2022-10-11/cabal.config | \
    sed -e 's/with-compiler: .*$//g' | \
    sed -e 's/.*inline-c.*//g' > cabal.freeze
cabal update
cabal v1-install \
    ./hasktorch/hasktorch \
    ./hasktorch/libtorch-ffi \
    ./hasktorch/libtorch-ffi-helper \
    ./inline-c/inline-c \
    ./inline-c/inline-c-cpp \
    --ghc-options "-j1 +RTS -A128m -n2m -RTS"

