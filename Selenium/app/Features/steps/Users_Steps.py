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


@then(u'Clicks show users')
def step_impl(context):
    context.users.click_showUsers()


@then(u'Clicks delete: {id}')
def step_impl(context, id):
    context.users.click_deleteUser(id)


@then(u'Clicks edit: {id}')
def step_impl(context, id):
    context.users.click_editUser(id)


@then(u'Change user: "{name}" "{surname}" "{email}" {position} {manager}')
def step_impl(context, name, surname, email, position, manager):
    context.users.changeUserData(name, surname, email, position, manager)


@then(u'Clicks modify user')
def step_impl(context):
    context.users.click_modifyUser()
