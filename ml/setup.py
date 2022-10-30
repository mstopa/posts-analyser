from pathlib import Path
from setuptools import setup, find_packages

from version import __version__ as package_version

project_root = Path(__file__).parent

setup(
    name="Posts' sentiment analyser",
    version=package_version,
    description="Machine learning model for sentiment analysis",
    author="Maciek Stopa",
    author_email="mstopa@student.agh.edu.pl",
    url="https://github.com/cansubmarinesswim/posts-analyser",
    packages=find_packages(),
    install_requires=[
        "flask",
        "numpy",
        "scipy",
        "torch",
        "transformers",
    ],
    long_description=(project_root / "README.md").read_text(),
    long_description_content_type="text/markdown",
)