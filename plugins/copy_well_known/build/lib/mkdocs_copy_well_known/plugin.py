from mkdocs.plugins import BasePlugin
from mkdocs.config.defaults import MkDocsConfig
import shutil
import os

class CopyWellKnownPlugin(BasePlugin):
    def on_post_build(self, config: MkDocsConfig) -> None:
        """
        Hook triggered after the MkDocs site is built.
        Copies the `.well-known` directory into the output site directory.
        """
        src = ".well-known"
        dst = os.path.join(config.site_dir, ".well-known")

        if not os.path.isdir(src):
            print("⚠️  [copy-well-known] Skipped: '.well-known' directory not found.")
            return

        if os.path.exists(dst):
            shutil.rmtree(dst)

        shutil.copytree(src, dst)
        print("✅ [copy-well-known] Copied '.well-known' directory to site output.")
