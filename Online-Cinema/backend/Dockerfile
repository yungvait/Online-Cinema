FROM ghcr.io/astral-sh/uv:python3.13-bookworm-slim

ENV PYTHONUNBUFFERED=1 \
    UV_COMPILE_BYTECODE=1 \
    UV_LINK_MODE=copy \
    PYTHONDONTWRITEBYTECODE=1

WORKDIR /src
COPY pyproject.toml uv.lock ./
RUN uv sync --frozen
COPY src/ /src
COPY db/ /db


ENTRYPOINT ["uv", "run"]
