from View.View_SpaceStation import *
from View.View_Users import *
import time
from behave import given, when, then, step


@given(u'Users. Open url: {url}')
def step_impl(context, url):
    context.driver.maximize_window()
    context.driver.get(url)
    context.space_station = SpaceStation(context.driver)
    context.users = Users(context.driver)


@then(u'Clicks users')
def step_impl(context):
    context.users.click_users()


@then(u'Clicks add users')
def step_impl(context):
    context.users.click_addUsers()


@then(u'Insert user: "{name}" "{surname}" {position} {manager}')
def step_impl(context, name, surname, position, manager):
    context.users.insertUserData(name, surname, position, manager)


@then(u'Clicks add user')
def step_impl(context):
    context.users.click_addUser()
