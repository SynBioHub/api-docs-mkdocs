To run locally
```bash
docker run -d --name mkdocs-server -p 8000:8000 -v $(pwd):/docs api-docs-mkdocs-image
```
you will need to restart the container to see the changes but not rebuild the image or rerun it.