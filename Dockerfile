# Use the official Material for MkDocs image
FROM squidfunk/mkdocs-material:latest

# Set a working directory for our application files
WORKDIR /docs

# Copy requirements.txt first
COPY requirements.txt .

# Install Python dependencies
# Use --no-cache-dir to keep the image size smaller.
RUN pip install --no-cache-dir -r requirements.txt
