from pathlib import Path
from setuptools import setup

from version import __version__ as package_version

project_root = Path(__file__).parent

setup(
    name="posts_sentiment_analyser",
    version=package_version,
    description="Machine learning model for sentiment analysis",
    author="Maciek Stopa",
    author_email="mstopa@student.agh.edu.pl",
    url="https://github.com/cansubmarinesswim/posts-analyser",
    packages=['posts_sentiment_analyser'],
    package_dir={'posts_sentiment_analyser':'src'},
    install_requires=[
        "flask",
        "py-healthcheck",
        "numpy",
        "scipy",
        "torch",
        "transformers",
        "waitress"
    ],
    long_description=(project_root / "README.md").read_text(),
    long_description_content_type="text/markdown",
)