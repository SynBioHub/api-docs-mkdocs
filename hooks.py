from __future__ import annotations

import re
from pathlib import Path

from openapidocs.mk.v3 import OpenAPIV3DocumentationHandler
from openapidocs.utils.source import read_from_source

OAD_PATTERN = re.compile(r"\[OAD\(([^)]+)\)\]")


def _render_oad(markdown_path: Path, templates_path: Path | None) -> str:
    source_dir = markdown_path.parent
    markdown = markdown_path.read_text(encoding="utf-8")

    def replace(match: re.Match[str]) -> str:
        source = match.group(1).strip("'\"")
        source_path = (source_dir / source).resolve()
        data = read_from_source(str(source_path), source_dir)
        handler = OpenAPIV3DocumentationHandler(
            data,
            style="MKDOCS",
            source=str(source_path),
            templates_path=str(templates_path) if templates_path else None,
        )
        return handler.write()

    return OAD_PATTERN.sub(replace, markdown)


def generate_openapi(docs_dir: Path) -> None:
    docs_dir = docs_dir.resolve()
    templates_path = docs_dir / "oad-templates"
    templates_dir = templates_path if templates_path.exists() else None

    for markdown_path in docs_dir.glob("openapi-*.md"):
        markdown = markdown_path.read_text(encoding="utf-8")
        if "[OAD(" not in markdown:
            continue

        output_path = markdown_path.with_suffix(".generated.md")
        output = _render_oad(markdown_path, templates_dir)
        output_path.write_text(output, encoding="utf-8")


def on_pre_build(config) -> None:
    generate_openapi(Path(config["docs_dir"]))


if __name__ == "__main__":
    generate_openapi(Path(__file__).resolve().parent / "docs")
