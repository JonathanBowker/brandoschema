from setuptools import setup, find_packages

setup(
    name='mkdocs-copy-well-known',
    version='0.1',
    description='MkDocs plugin to copy .well-known files to output',
    author='Jonathan Bowker',
    packages=find_packages(),  # finds 'mkdocs_copy_well_known'
    entry_points={
        'mkdocs.plugins': [
            'copy-well-known = mkdocs_copy_well_known.plugin:CopyWellKnownPlugin',
        ],
    },
    install_requires=['mkdocs>=1.4'],
)
