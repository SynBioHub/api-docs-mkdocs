# External Remotes

Remotes allow SynBioHub to interact with external biological data repositories, enabling users to import data or search across distributed instances.

## Supported Remote Types

### Benchling
Integration with [Benchling](https://benchling.com) allows you to browse and import sequences directly into your SynBioHub collections. You'll need a Benchling API token to configure this.

### ICE (Inventory of Composable Elements)
Integration with [ICE](https://github.com/SBRC/ICE) instances allows for seamless data exchange between your local registry and an ICE-based repository.

## Configuration

Remotes are configured via the [Administration API](../openapi-main.md#tag/Remotes-Administration). Admins can:
- Add new Benchling or ICE remotes.
- Set visibility (Public vs. Private).
- Configure SSL certificate validation.
