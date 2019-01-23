import sys

# We must use setuptools, not distutils, because we need to use the
# namespace_packages.
from setuptools import setup, find_packages, find_namespace_packages

if __name__ == '__main__':
    
    install_requires = ['six>=1.9', 'setuptools']
    if sys.version_info <= (2,7):
        install_requires.append('ordereddict')
        install_requires.append('unittest2')

    setup(
      name='ubii_msg_formats',
      version=1.0,
      description='Protocols for ubii',
      download_url='https://gitlab.lrz.de/IN-FAR/Ubi-Interact/ubii-msg-formats.git',
      long_description="This protocols are used for the communication in the server-client infrastructure for the Ubi-Interact Framework.",
      url='https://gitlab.lrz.de/IN-FAR/Ubi-Interact',
      maintainer='ga94hib',
      maintainer_email='ga94hib@mytum.de',
      license='3-Clause BSD License',
      classifiers=[
        "Programming Language :: Python",
        "Programming Language :: Python :: 2",
        "Programming Language :: Python :: 2.7",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.3",
        "Programming Language :: Python :: 3.4",
        "Programming Language :: Python :: 3.5",
        "Programming Language :: Python :: 3.6",
        "Programming Language :: Python :: 3.7",
        ],
      #packages = ['dist/py/',],
      packages=find_packages(),
      #package_dir={'proto' : './dist/py/proto'},
      install_requires=install_requires,
      include_package_data=True,
  )