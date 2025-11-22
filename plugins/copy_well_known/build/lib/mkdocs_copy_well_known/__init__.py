from mkdocs.plugins import BasePlugin

class CopyWellKnownPlugin(BasePlugin):
    def on_post_build(self, config):
        print("✅ Plugin hook: copy-well-known triggered")
