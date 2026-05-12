FROM python:3.11-slim

# Install uv
RUN pip install uv

WORKDIR /app

# Copy pyproject.toml and related files
COPY pyproject.toml uv.lock ./

# Install dependencies using uv
RUN uv sync --frozen

# Copy the rest of the project
COPY . .

EXPOSE 8000

# Run mkdocs server
CMD ["uv", "run", "mkdocs", "serve", "-a", "0.0.0.0:8000"]
