# [StoryBookr](https://storybookr.herokuapp.com/)
---
### __Project Dependencies__

- Django
	- 1.11.7
	- Django 2.0 was released during this project, do not upgrade if you want it to work as intended.
	- Python 3
- React
	- 15.5.4
	- Sorry, no v16 here.
- PSQL 
	- ^9.6.5
	- Fairly confident the PSQL version doesn't matter as long as it is compattible with the [Django ORM](https://docs.djangoproject.com/en/1.11/topics/db/models/)

- See the individual package versions
	- [requirements for django](requirements.txt)
	- [requirements for react](frontend/package.json)

---

### __How to run__:
#### Fork and clone this repo.
#### Set up the Python Environment
In order to run a django instance and make be able to use different versions on different projects you must set up a virtual environment for it to run. This is because python installs packages globally unlike npm wich installs them into a project directory.

##### Things you will need to install first:
You can also follow [this](https://virtualenvwrapper.readthedocs.io/en/latest/) guide.
1. Python 3
	- Download python 3 from [here](https://www.python.org/downloads/)
		- You can check what version of python you have installed by using `python -V` or `python3 -V`
		- You will get a python IDE to write code in as well.
	
	- Check to see if you have pip installed
		- `pip -v` or `pip3 -v`
		- downloading python3 from python.org will automatically install pip
2. Download `virtualenvwrapper` 
	- `pip3 install virtualenvwrapper`
	- follow config steps in [this guide](https://virtualenvwrapper.readthedocs.io/en/latest/)
3. Now you can make a new virtual environment with `mkvirtualenv <NAME>` where `<NAME>` is the environment name.
	- switch between virtualenvs with `workon`
	- stop using the env with `deactivate`
#### Install Node Modules
```bash
$ cd frontend/
$ npm install
``` 

---
### __Start the server:__

1. In the project root run `pip install`
	- This will install all the project dependencies listed in `requirements.txt`
2. Make sure you have a PSQL DB locally called `storybookr`
	- configure a user for that DB called `django` with a pass of  `django`
3. __(Skip if only running server and not editing)__ Install node_modules. Go into the frontend folder and `npm install`
	- This is only necessary if you wish to edit the react files.
4. Start the server with `python manage.py runserver`
	- It's possible that you might need to migrate settings in order for the db to run properly.
		- run `python manage.py migrate` to apply db changes
		- run `python manage.py loaddata books.json` to import the sample db
5. If you want to make changes to the frontend, you will need to build it and have django serve the new version. Luckily I've made a script that does this automatically if you use the build function in the `package.json` for react.
	- In the frontend folder use `npm run build` 
		- this will automatically build react into production and use a python script called `movebuild.py` to place the files properly to be served up.

6. Visit `localhost:8000` to see the webiste.
7. If you wish to load the frontend separately run `npm run start` in the frontend folder.

---
### Deliverables 
- [Trello](https://trello.com/b/0RZBJngI/p4-storybookr)
- ![Landing Page](landingpage.png)

---
### Project Approach

After learning a bit of python and learning that there was a web framework for it, I was sold. However, learning the exact way to configure certain settings was a bit tricky initially. Configuring the DB, serving static files, creating a web API to serve JSON, etc. all caused a few hickups along the way. 

With react, it was a little different. Because of how I wanted to configure certain aspects of my frontend, I ran into a bit of trouble with syntax or specific packages. react-dnd and react-router-dom initally didn't play nice but thanks to [Higher Order Components](https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e) it was simpler than I thought.

"Simpler than I thought" is a good way to sum up this project. Django is a great backend framework that allows you to spin up a whole website very quickly.
React is also great at what it does, but in the future I probably would stay away from incorporating a frontend framework with something like Django. I lost a lot of functionality between the two because of the integration that I forced.

#### Unsolved problems

- I am not good at styling.
	- I did encorporate [Material-Ui](https://material-ui-next.com/) but to poor effect.
	- Much better at giving life to existing designs than creating them.
	- In the future I should give myself time to wireframe or look at similar designs.
- I tend to scope for very functional projects and not much data handling or user stories.
	- I do not see this as a problem so much as that I have a niche in backend or functional programming.
