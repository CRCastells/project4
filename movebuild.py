import shutil

src = 'frontend/'
dst = './'

shutil.copy(src + 'build/index.html', dst + 'templates/index.html')
shutil.rmtree(dst + 'static')
shutil.copytree(src + 'build/static', dst + 'static')
