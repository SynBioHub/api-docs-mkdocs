FROM python:3.11-slim

# Set a working directory for our application files
WORKDIR /docs

# Copy requirements.txt first
COPY requirements.txt .

# Install Python dependencies
# Use --no-cache-dir to keep the image size smaller.
RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 8000

# Run mkdocs server
CMD ["mkdocs", "serve", "-a", "0.0.0.0:8000"]
