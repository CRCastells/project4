import requests,sys

page = requests.get(sys.argv[1])

file = open('book.html' , 'a')
file.write(page.text)
file.close()