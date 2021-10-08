import setuptools
import setuptools.command.sdist as orig


class sdist(orig.sdist):
    user_options = [
        ('compile-proto', None,
         "compile proto files on build"
         "[default; disable with --no-compile-proto]"),
        ('no-compile-proto', None,
         "don't compile proto files on build"),
    ]

    boolean_options = ['compile-proto']
    negative_opt = {'no-compile-proto': 'compile-proto'}

    def initialize_options(self):
        orig.sdist.initialize_options(self)
        self.compile_proto = False

    def process_compile(self):
        if not self.compile_proto:
            return

        import subprocess
        subprocess.check_call('npm run compile', shell=True)

    def run(self):
        try:
            self.process_compile()
        except OSError:
            raise

        super().run()


with open("README.md", "r", encoding="utf-8") as fh:
    long_description = fh.read()


setuptools.setup()
