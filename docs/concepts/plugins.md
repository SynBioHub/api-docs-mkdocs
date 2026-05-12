# SynBioHub Plugins

Plugins allow you to extend SynBioHub's functionality without modifying the core codebase. They are standalone web services that SynBioHub communicates with via a standardized API.

## Plugin Types

1.  **Rendering Plugins**: Used to visualize objects (e.g., VisBol for SBOL diagrams).
2.  **Submit Plugins**: Used to process data during the submission process (e.g., converting non-SBOL files).
3.  **Download Plugins**: Used to export data into different formats.
4.  **Mail Plugins**: Used to handle custom email notifications.

## Requirements

All plugins must implement three core endpoints:
- `GET /status`: Returns whether the plugin is operational.
- `POST /evaluate`: Determines if the plugin can handle a specific object or file.
- `POST /run`: Executes the plugin logic.

For more details on implementing these, see the [Plugins API](../openapi-plugins.md) documentation.
