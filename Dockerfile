FROM python:3.11-slim

# Set a working directory for our application files
WORKDIR /docs

# Copy configuration and content
COPY zensical.toml .
COPY docs ./docs

# Install Zensical
RUN pip install --no-cache-dir zensical

EXPOSE 8000

# Run Zensical server
CMD ["zensical", "serve", "-a", "0.0.0.0:8000"]
