#!/usr/bin/env bash

# Description: this syncs the project with the upstream repo

uv tool run --with jinja2_shell_extension \
  copier update --trust --skip-tasks --skip-answered \
  --exclude .copier \
  --exclude pnpm-lock.yaml